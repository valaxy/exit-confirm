define(function () {

	var NosavePrompt = function (message, canLeave) {
		this._message = message
		this._canLeave = canLeave
	}

	NosavePrompt.prototype._onbeforeunload = function (e) {
		if (!this._canLeave()) {
			e.returnValue = this._message
		}
	}

	NosavePrompt.prototype.on = function () {
		this._bind = this._onbeforeunload.bind(this)
		window.addEventListener('beforeunload', this._bind)
	}

	NosavePrompt.prototype.off = function () {
		window.removeEventListener('beforeunload', this._bind)
	}

	return NosavePrompt
})