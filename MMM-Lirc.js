Module.register('MMM-Lirc',
{
	start: function()
	{
		Log.info('Starting module: ' + this.name);
		this.sendSocketNotification('INIT', this.config);
	},
	
	socketNotificationReceived: function(notification, send)
	{
		if (notification === 'Lirc_Event')
		{
			if (send.payload === undefined)
			{						
				this.sendNotification(send.Notification);
			}
			else
			{
				this.sendNotification(send.Notification, send.payload);
			}
		}
	},
});