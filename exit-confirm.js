define(function () {

	var ExitConfirm = function (message, canLeave) {
		this._message = message
		this._canLeave = canLeave
	}

	ExitConfirm.prototype._onbeforeunload = function (e) {
		if (!this._canLeave()) {
			return e.returnValue = this._message
		}
	}

	ExitConfirm.prototype.on = function () {
		this._bind = this._onbeforeunload.bind(this)
		window.addEventListener('beforeunload', this._bind)
	}

	ExitConfirm.prototype.off = function () {
		window.removeEventListener('beforeunload', this._bind)
	}

	return ExitConfirm
})