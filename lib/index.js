var _ = require('lodash');
var dargs = require('dargs');
var Prince = require('prince')();
var spawn = require('spawn-promise');
var suspend = require('suspend');

var prince = Prince.config.binary;
// Mandatory args, never want these overridden
var args = [
	'-', // read from stdin
	'-o -' // write to stdout
];
/**
 * Render HTML input to PDF
 *
 * @param {String} input
 *    Input to pipe into prince process
 *
 * @param {Object} options
 *    Options to apply to prince process.
 *    http://www.princexml.com/doc/command-line/
 *
 *    Camel case inputs are converted to the proper format.
 *    e.g.
 *
 *        { licenseFile: 'path' } -> --license-file=path
 *
 *    Options with true values will be set as boolean
 *    e.g.
 *
 *        { encrypt: true } -> --encrypt
 *
 *    Note: Options with blank values will be ignored.
 * @param {String} [options.media=screen]
 *
 * @returns {Buffer} pdf
 */
var render = suspend.promise(function * (input, options) {
	options = _.defaults({}, options, {
		media: 'screen'
	});
	// options with blank values bomb without a good error message =>
	// remove blanks
	options = _.omit(options, _.isEmpty);
	// Convert {optionName: value} -> ['--option-name=value']
	options = dargs(options);
	return yield spawn(prince, args.concat(options), input);
});

module.exports = render;
