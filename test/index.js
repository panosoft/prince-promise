var Prince = require('../');
var expect = require('chai')
	.use(require('chai-as-promised'))
	.expect;
var pdfText = require('pdf-text');

describe('#render', function () {
	it('create pdf', function () {
		var prince = Prince.create();
		var content = 'Hello';
		var promise = new Promise(function (resolve, reject) {
			prince.render(content)
				.then(function (pdf) {
					pdfText(pdf, function (error, chunks) {
						resolve(chunks[0]);
					});
				})
				.catch(reject);
		});
		return expect(promise).to.eventually.deep.equal(content);
	});
});
