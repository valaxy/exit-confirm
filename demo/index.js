define(function (require, exports) {
	var NosaveConfirm = require('../nosave-confirm')

	exports.init = function () {
		new NosaveConfirm('You have not saved, confirm to exit?', function () {
			return false
		}).on()
	}
})