module.exports = {
	getErr: (err, messageonly = false) => { // Return first error
		return messageonly ? err.errors[0].message : err.errors[0]
	},
	isEmptyArray: (arr, all) => { // Check for empty value in array, true if any, unless all is set
		for (i = 0, count = 0; i < arr.length; ++i) {
			if (!arr[i]
				|| (typeof arr[i] === 'object' && Object.keys(arr[i]).length === 0)
			)
				if (all) ++count;
				else return true
		}
		if (count === arr.length) return true
	},
	pick: (object, propsarr) => propsarr.reduce((a, e) => ({ ...a, [e]: object[e] }), {}) // lodash _.pick basically


}