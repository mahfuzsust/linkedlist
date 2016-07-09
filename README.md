# datelib

[![NPM version](https://img.shields.io/npm/v/datelib.svg?style=flat)](https://www.npmjs.com/package/datelib)
[![Downloads](https://img.shields.io/npm/dm/datelib.svg?style=flat)](https://npmjs.org/package/datelib)
[![apache license](http://img.shields.io/badge/license-apache2-blue.svg?style=flat)](https://github.com/mahfuzsust/datelib/blob/master/LICENSE)

## About

Datelib is a Node module that provide javascript date functionalities.

## Installation

npm install datelib

## Usage

```javascript
var datelib = require("datelib");

```

## Features

*   Additional function with javascript ```Date``` object.

## Documentation

### Methods

*   [`createTree`](#createTree)

------------------------------------------------

### addDays()

Add days with given date object.

__Arguments__

*   `date` - A javascript date.
*   `days` - ```number``` of days.

__Returns__

*   javascript `date`

__Examples__

```js
var date = new Date();
var tomorrow = datelib.addDays(date, 1);
```

------------------------------------------------
