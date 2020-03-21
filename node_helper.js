const NodeHelper = require('node_helper');
const {PythonShell} = require('python-shell');

module.exports = NodeHelper.create(
{
	start: function()
	{
		console.log('Starting node_helper for: ' + this.name);
	},
	
	socketNotificationReceived: function(notification)
	{
		if (notification === 'INIT')
		{
			var py = './modules/MMM-Lirc/MMM-Lirc.py';
			var option = {mode: 'text', pythonPath: '/usr/bin/python', pythonOptions: ['-u']};
			this.shell = new PythonShell(py, option);
			
			this.shell.on('message', (message) =>
			{
				this.sendSocketNotification('Lirc_Event', JSON.parse(message));
			});
			
			this.shell.on('error', (message) =>
			{
				this.shell.end();
				console.log("[MMM-LIRC] script is finished. " + message);
			});
			
			this.shell.on('close', () =>
			{
				console.log('[MMM-LIRC] Python script is terminated.');
				// need to restart
			});
		}
	}
});
