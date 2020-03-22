# MMM-Lirc
Magic Mirror² Module to send notifications triggered by your IR remote control.

## Installation:
    cd ~/MagicMirror/modules
    git clone https://github.com/marvin424/MMM-Lirc
    cd MMM-Lirc
    npm install
    
## Using the module:
To use this module, add it to the modules array in the *config/config.js* file:
```javascript
{
  disabled: false,
  module: 'MMM-Lirc',
  config:
  {
    toggle:
    [
        {trigger: 'NEWS_DETAIL', on: 'NEWS_DETAIL', off: 'NEWS_DETAIL_CLOSE'},
        {trigger: 'SHOW_COCKTAILS', on: 'HIDE_COCKTAILS', off: 'SHOW_COCKTAILS'}
    ]
  }
},
```

## Configuration:
You need a running installation of LIRC and the python lib for LIRC, [here](http://www.netzmafia.de/skripten/hardware/RasPi/Projekt-IR-Fernsteuerung/index.html) you will find a detailed description how to setup the hard- and software. Note, this site is a bit outdated, if you use a kernel version newer than 4.19.x you need to change the dtoverlay in your */boot/config.txt* from:

    dtoverlay=lirc-rpi,gpio_in_pin=23,gpio_out_pin=24
to
    
    dtoverlay=gpio-ir,gpio_pin=23
    dtoverlay=gpio-ir-tx,gpio_pin=24
    
See also https://www.raspberrypi.org/forums/viewtopic.php?t=235256

The main configuration file is lircrc:\
Here you can define the notifications you want to trigger on a certain button in a JSON-Array.

```javascript
# send one notification
begin
  prog   = MMM-LIRC
  button = KEY_VOLUMEDOWN
  config = [{"Notification": "PAGE_DECREMENT", "payload": 1}]
  repeat = 0
end

# send two notifications
begin
  prog   = MMM-LIRC
  button = KEY_VOLUMEUP
  config = [{"Notification": "PAGE_INCREMENT", "payload": 1}, {"Notification": "SHOW_EYECANDY"}]
  repeat = 0
end

# no notification
begin
  prog   = MMM-LIRC
  button = KEY_VOLUMEUP
  config = []
  repeat = 0
end
```

## Option 'toggle'
You can use toggle in config section to send two diffrent notifications with just one key on your remote control. If two notification are just switching between two diffent states, like module visible or not, this saves keys on you remote an makes it easier to remember :)

```javascript
[
    {
        trigger: 'notification from lircrc to be matched',
        on: 'notification sent on odd keystrokes',
        off: 'notification sent on even keystrokes'
    },
    {...}
]
```

Have fun.
