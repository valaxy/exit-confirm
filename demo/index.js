define(function (require, exports) {
	var ExitConfirm = require('../exit-confirm')

	exports.init = function () {
		new ExitConfirm('You have not saved, confirm to exit?', function () {
			return false
		}).on()
	}
})