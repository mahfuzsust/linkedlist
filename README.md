# datelib

[![NPM version](https://img.shields.io/npm/v/datelib.svg?style=flat)](https://www.npmjs.com/package/datelib)
[![Downloads](https://img.shields.io/npm/dm/datelib.svg?style=flat)](https://npmjs.org/package/datelib)
[![apache license](http://img.shields.io/badge/license-apache2-blue.svg?style=flat)](https://github.com/mahfuzsust/datelib/blob/master/LICENSE)

## About

A Node module that provide additional javascript ```Date``` functionalities.

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

*   [`addDays`](#addDays)
*   [`addMonths`](#addMonths)
*   [`addYears`](#addYears)
*   [`addHours`](#addHours)
*   [`addMinutes`](#addMinutes)
*   [`addSeconds`](#addSeconds)
*   [`compare`](#compare)
*   [`compareWithEquals`](#compareWithEquals)
*   [`getDayOfTheWeek`](#getDayOfTheWeek)
*   [`getMonthOfTheYear`](#getMonthOfTheYear)
*   [`isBefore`](#isBefore)

------------------------------------------------

<a name="addDays" />

### addDays()

Add days with given date object.

__Arguments__

*   `date` - A javascript ```Date```.
*   `days` - ```number``` of days.

__Returns__

*   javascript `date`

__Examples__

```js
var date = new Date();
var result = datelib.addDays(date, 1);
```

------------------------------------------------

<a name="addMonths" />

### addMonths()

Add months with given date object.

__Arguments__

*   `date` - A javascript ```Date```.
*   `months` - ```number``` of months.

__Returns__

*   javascript `date`

__Examples__

```js
var date = new Date();
var result = datelib.addMonths(date, 1);
```

------------------------------------------------

<a name="addYears" />

### addYears()

Add years with given date object.

__Arguments__

*   `date` - A javascript ```Date```.
*   `years` - ```number``` of years.

__Returns__

*   javascript `date`

__Examples__

```js
var date = new Date();
var result = datelib.addYears(date, 1);
```

------------------------------------------------

<a name="addHours" />

### addHours()

Add hours with given date object.

__Arguments__

*   `date` - A javascript ```Date```.
*   `hours` - ```number``` of hours.

__Returns__

*   javascript `date`

__Examples__

```js
var date = new Date();
var result = datelib.addHours(date, 1);
```

------------------------------------------------

<a name="addMinutes" />

### addMinutes()

Add minutes with given date object.

__Arguments__

*   `date` - A javascript ```Date```.
*   `minutes` - ```number``` of minutes.

__Returns__

*   javascript `date`

__Examples__

```js
var date = new Date();
var result = datelib.addMinutes(date, 1);
```

------------------------------------------------

<a name="addSeconds" />

### addSeconds()

Add seconds with given date object.

__Arguments__

*   `date` - A javascript ```Date```.
*   `seconds` - ```number``` of seconds.

__Returns__

*   javascript `date`

__Examples__

```js
var date = new Date();
var result = datelib.addSeconds(date, 1);
```

------------------------------------------------

<a name="compare" />

### compare()

Compare two javascript ```Date``` objects.

__Arguments__

*   `d1` - A javascript ```Date```.
*   `d2` - A javascript ```Date```.

__Returns__

*   if Return value == -1 then it indicates d1 is less than d2.
*   if Return value == 1 then it indicates d1 is greater than d2.
*   if Return value = 0 then it indicates d1 is equal to d2.

__Examples__

```js
var d1 = new Date(2016, 0, 1);
var d2 = new Date(2016, 0, 10);
var result = datelib.compare(d1, d2);
```

------------------------------------------------

<a name="compareWithEquals" />

### compareWithEquals()

Compare two javascript ```Date``` objects with equality check.

__Arguments__

*   `d1` - A javascript ```Date```.
*   `d2` - A javascript ```Date```.

__Returns__

*   if Return value == -1 then it indicates d1 is less than or equal to d2.
*   if Return value == 1 then it indicates d1 is greater than or equal to d2.

__Examples__

```js
var d1 = new Date(2016, 0, 1);
var d2 = new Date(2016, 0, 10);
var result = datelib.compareWithEquals(d1, d2);
```

------------------------------------------------

<a name="getDayOfTheWeek" />

### getDayOfTheWeek()

Get day of the week from javascript ```Date``` object.

__Arguments__

*   `date` - A javascript ```Date```.

__Returns__

*   Return ```string```

__Examples__

```js
var d1 = new Date(2016, 0, 1);
var result = datelib.getDayOfTheWeek(d1); // Returns "Friday"
```

------------------------------------------------

<a name="getMonthOfTheYear" />

### getMonthOfTheYear()

Get month of the year from javascript ```Date``` object.

__Arguments__

*   `date` - A javascript ```Date```.

__Returns__

*   Return ```string```

__Examples__

```js
var d1 = new Date(2016, 0, 1);
var result = datelib.getMonthOfTheYear(d1); // Returns "January"
```

------------------------------------------------

<a name="isBefore" />

### isBefore()

check is before by comparing javascript ```Date``` object.

__Arguments__

*   `d1` - A javascript ```Date```.
*   `d2` - A javascript ```Date```.

__Returns__

*   Return ```boolean```

__Examples__

```js
var d1 = new Date(2016, 0, 1);
var d1 = new Date(2016, 0, 5);
var result = datelib.isBefore(d1, d2); // Returns "true"
```

------------------------------------------------
