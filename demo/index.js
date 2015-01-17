define(function (require, exports) {
	var NosavePrompt = require('../nosave-prompt')

	exports.init = function () {
		new NosavePrompt('You have not saved, confirm to exit?', function () {
			return false
		}).on()
	}
})