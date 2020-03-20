# MMM-Lirc
Magic Mirror² Module to send notifications triggered by your IR remote control

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
},
```

## Configuration
You need a running installation of LIRC. Maybe you need to install the python lib for LIRC.\
The main configuration file is lircrc, here you can define the notifications you want to trigger on a certain button (JSON-Fromat).

```javascript
begin
  prog   = MMM-LIRC
  button = KEY_VOLUMEDOWN
  config = {"Notification": "PAGE_DECREMENT", "payload": 1}
  repeat = 0
end
```

Have fun.
