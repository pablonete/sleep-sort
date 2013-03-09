function sleepsort(array, callback) {
	return process.nextTick(function() {callback(array || []);});
}

module.exports = sleepsort;