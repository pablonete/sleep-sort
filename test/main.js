var should = require('should');
var sleepsort = require('../lib/main');

describe('sleepsort', function() {
	describe('with no arguments', function() {
		it('returns an empty array', function (done) {
			var result = sleepsort(null, function(result) {
				result.should.eql([]);
				done();				
			});
		});
	});

	describe('with an empty array argument', function() {
		it('calls the callback with an empty array', function(done) {
			var result = sleepsort([], function(result) {
				result.should.eql([]);
				done();
			});
		});
	});

	describe('with a single element array', function() {
		it('calls the callback with the same array', function(done) {
			var result = sleepsort([1], function(result) {
				result.should.eql([1]);
				done();
			});
		});
	});

	describe('with [2, 1]', function() {
		it('calls the callback with [1, 2]', function(done) {
			var result = sleepsort([2, 1], function(result) {
				result.should.eql([1, 2]);
				done();
			});
		});
	});

	describe('with [\'4\', \'3\', \'2\']', function() {
		it('calls the callback with [\'2\', \'3\', \'4\']', function(done) {
			var result = sleepsort(['4', '3', '2'], function(result) {
				result.should.eql(['2', '3', '4']);
				done();
			});
		});
	});
});