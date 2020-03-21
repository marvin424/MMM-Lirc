Module.register('MMM-Lirc',
{
	start: function()
	{
		Log.info('Starting module: ' + this.name);
		this.sendSocketNotification('INIT');
	},
	
	socketNotificationReceived: function(notification, send)
	{
		if (notification === 'Lirc_Event')
		{
			send.forEach((s) =>
			{
				if (s.Notification !== undefined)
				{
					if (s.payload === undefined)
					{
						this.sendNotification(s.Notification);
					}
					else
					{
						this.sendNotification(s.Notification, s.payload);
					}
				}
			});
		}
	},
});