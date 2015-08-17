# prince-promise

Convert HTML to PDF using a promise based api for [PrinceXML](http://www.princexml.com/).

[![npm version](https://img.shields.io/npm/v/prince-promise.svg)](https://www.npmjs.com/package/prince-promise)
[![npm license](https://img.shields.io/npm/l/prince-promise.svg)](https://www.npmjs.com/package/prince-promise)
[![Travis](https://img.shields.io/travis/panosoft/prince-promise.svg)](https://travis-ci.org/panosoft/prince-promise)
[![David](https://img.shields.io/david/panosoft/prince-promise.svg)](https://david-dm.org/panosoft/prince-promise)
[![npm downloads](https://img.shields.io/npm/dm/prince-promise.svg)](https://www.npmjs.com/package/prince-promise)

## Installation

```sh
npm install prince-promise
```

## Usage

```js
var Prince = require('prince-promise');

var prince = Prince.create();
var html = 'Hello';

prince.render(html)
  .then(function (pdf) {
    // ...
  });
```

## API

- [`create`](#create)

__Prince__

- [`render`](#render)

---

<a name="create"/>
#### create ( [options] )

Returns an instance of [`Prince`](#Prince). Default render options can be set using `options`.

__Arguments__
- `options` - An object of default options use each time `render` is called. See `render` `options` below. Defaults to `{}`.

__Example__

```js
var options = {
  licenseFile: 'path',
  encrypt: true
}

var prince = Prince.create(options);
```

---

<a name="Prince"/>
### Prince

<a name="render"/>
#### render ( html [, options] )

Converts an HTML string to a PDF. Returns a `Promise` that is fulfilled with the `pdf` buffer.

__Arguments__
- `html` - A string of HTML content to render.
- `options` - An object of options to run `prince` with. All [PrinceXml options](http://www.princexml.com/doc/command-line/) are supported and should be set as camelCased properties of this object.

  For instance:

  ```sh
  prince --license-file=path  --encrypt
  ```

  Becomes:

  ```js
  var options = {
    licenseFile: 'path',
    encrypt: true
  };
  ```

__Example__

```js
var html = 'Hello';
var options = {
  licenseFile: 'path',
  encrypt: true
};

prince.render(html, options)
  .then(function (pdf) {
    // ...
  });
```
