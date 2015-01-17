A javascript module, popup a dialog to confirm when exit a page

# Screenshot
![screenshot](doc/screenshot.png)

# Introduction
```javascript
var NosaveConfirm = require('bower_components/nosave-prompt')
var saveFlag = false

// pass a message and a state-confirm function
var handler = new NosaveConfirm('You have not saved, confirm to exit?', function () {
	return saveFlag
})

// open bind
handler.on()

// remove bind
handler.off()

```