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
},
```
## Configuration:
You need a running installation of LIRC and the python lib for LIRC.\
The main configuration file is lircrc, here you can define the notifications you want to trigger on a certain button in a JSON-Array.

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

Have fun.
