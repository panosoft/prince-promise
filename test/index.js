var prince = require('../');
var expect = require('chai')
	.use(require('chai-as-promised'))
	.expect;
var pdfText = require('pdf-text');

describe('#prince', function () {
	it('create pdf', function () {
		var content = 'Hello';
		var promise = new Promise(function (resolve, reject) {
			prince(content)
				.then(function (pdf) {
					pdfText(pdf, function (error, chunks) {
						resolve(chunks[0]);
					});
				})
				.catch(reject);
		});
		return expect(promise).to.eventually.equal(content);
	});
});
