# prince-promise

Convert HTML to PDF using a promise based api for [PrinceXML](http://www.princexml.com/).

[![npm](https://img.shields.io/npm/v/prince-promise.svg)]()
[![npm](https://img.shields.io/npm/l/prince-promise.svg)]()
[![Travis](https://img.shields.io/travis/panosoft/prince-promise.svg)]()
[![David](https://img.shields.io/david/panosoft/prince-promise.svg)]()
[![npm](https://img.shields.io/npm/dm/prince-promise.svg)]()

# Installation

```
npm install prince-promise
```

# Usage

```js
var Prince = require('prince-promise');

var prince = Prince.create();
var html = 'Hello';

prince.render(html)
  .then(function (pdf) {
    ...
  });
```

# API

## create( [options] )

Returns an instance of `Prince`. Default render options can be set using `options`.

### Arguments
- `options` - An object of default options use each time `render` is called. See `render` `options` below. Defaults to `{}`.

### Example

```js
var options = {
  licenseFile: 'path',
  encrypt: true
}

var prince = Prince.create(options);
```

## Prince

### render( content [, options] )

Converts `html` to `pdf`.

#### Arguments
- `content` - A string of `html` content to render.
- `options` - An object of options to run `prince` with. All [PrinceXml options](http://www.princexml.com/doc/command-line/) are supported and should be set as camelCased properties of this object.

  For instance:

  ```
  prince --license-file=path  --encrypt
  ```

  Becomes:

  ```js
  var options = {
    licenseFile: 'path',
    encrypt: true
  }
  ```

#### Example

```js
var html = 'Hello';
var options = {
  licenseFile: 'path',
  encrypt: true
}

prince.render(html, options)
  .then(function (pdf) {
    ...
  });
```
