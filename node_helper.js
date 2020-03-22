const NodeHelper = require('node_helper');
const {PythonShell} = require('python-shell');

module.exports = NodeHelper.create(
{
	start: function()
	{
		console.log('Starting node_helper for: ' + this.name);
	},
	
	socketNotificationReceived: function(notification, config)
	{
		if (notification === 'INIT')
		{
			// init array toggle to remember status
			var toggle = [];
			for (var i = 0; i < config.toggle.length; i++)
			{
				toggle[i] = 0;
			}
			var py = './modules/MMM-Lirc/MMM-Lirc.py';
			var option = {mode: 'text', pythonPath: '/usr/bin/python', pythonOptions: ['-u']};
			this.shell = new PythonShell(py, option);
			
			
			this.shell.on('message', (message) =>
			{
				var send = JSON.parse(message);
				
				send.forEach((s) =>
				{
					if (s.Notification !== undefined)
					{
						for (var i = 0; i < config.toggle.length; i++)
						{
							if (s.Notification === config.toggle[i].trigger)
							{
								if (toggle[i] === 0)
								{
									toggle[i] = 1;
									s.Notification = config.toggle[i].on;
								}
								else
								{
									toggle[i] = 0;
									s.Notification = config.toggle[i].off;
								}
							}
						}
						this.sendSocketNotification('Lirc_Event', s);
					}
				});
			});
			
			this.shell.on('error', (message) =>
			{
				this.shell.end();
				console.log("[MMM-LIRC] script is finished, this should not happen. " + message);
			});
			
			this.shell.on('close', () =>
			{
				console.log('[MMM-LIRC] Python script is terminated, this should not happen.');
			});
		}
	}
});
