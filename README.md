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
require("datelib");
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

*   `days` - ```number``` of days. Support negative value for subtract.

__Returns__

*   javascript `date`

__Examples__

```js
new Date().addDays(1);
```

------------------------------------------------

<a name="addMonths" />

### addMonths()

Add months with given date object.

__Arguments__

*   `months` - ```number``` of months. Support negative value for subtract.

__Returns__

*   javascript `date`

__Examples__

```js
new Date().addMonths(1);
```

------------------------------------------------

<a name="addYears" />

### addYears()

Add years with given date object.

__Arguments__

*   `years` - ```number``` of years. Support negative value for subtract.

__Returns__

*   javascript `date`

__Examples__

```js
new Date().addYears(1);
```

------------------------------------------------

<a name="addHours" />

### addHours()

Add hours with given date object.

__Arguments__

*   `hours` - ```number``` of hours. Support negative value for subtract.

__Returns__

*   javascript `date`

__Examples__

```js
new Date().addHours(1);
```

------------------------------------------------

<a name="addMinutes" />

### addMinutes()

Add minutes with given date object.

__Arguments__

*   `minutes` - ```number``` of minutes. Support negative value for subtract.

__Returns__

*   javascript `date`

__Examples__

```js
new Date().addMinutes(1);
```

------------------------------------------------

<a name="addSeconds" />

### addSeconds()

Add seconds with given date object.

__Arguments__

*   `seconds` - ```number``` of seconds. Support negative value for subtract.

__Returns__

*   javascript `date`

__Examples__

```js
new Date().addSeconds(1);
```

------------------------------------------------

<a name="compare" />

### compare()

Compare two javascript ```Date``` objects.

__Arguments__

*   `date` - A javascript ```Date```.

__Returns__

*   if Return value == -1 then it indicates date is greater than given.
*   if Return value == 1 then it indicates date is less than given.
*   if Return value = 0 then it indicates date is equal to given.

__Examples__

```js
var d1 = new Date(2016, 0, 1);
new Date().compare(d1);
```

------------------------------------------------

<a name="compareWithEquals" />

### compareWithEquals()

Compare two javascript ```Date``` objects with equality check.

__Arguments__

*   `date` - A javascript ```Date```.

__Returns__

*   if Return value == -1 then it indicates date is greater than or equal to given.
*   if Return value == 1 then it indicates date is less than or equal to given.

__Examples__

```js
var d1 = new Date(2016, 0, 1);
new Date().compareWithEquals(d1);
```

------------------------------------------------

<a name="getDayOfTheWeek" />

### getDayOfTheWeek()

Get day of the week from javascript ```Date``` object.

__Arguments__

*   `lang` - ```string``` Language code (`default` EN)

__Returns__

*   Return ```string```

__Examples__

```js
new Date().getDayOfTheWeek(); // Returns "Friday"
```

------------------------------------------------

<a name="getMonthOfTheYear" />

### getMonthOfTheYear()

Get month of the year from javascript ```Date``` object.

__Arguments__

*   `lang` - ```string``` Language code (`default` EN)

__Returns__

*   Return ```string```

__Examples__

```js
new Date().getMonthOfTheYear(); // Returns "January"
```

------------------------------------------------

<a name="isBefore" />

### isBefore()

check is before by comparing javascript ```Date``` object.

__Arguments__

*   `date` - A javascript ```Date```.

__Returns__

*   Return ```boolean```

__Examples__

```js
var d1 = new Date(2016, 0, 1);
new Date().isBefore(d1); // Returns "false"
```

------------------------------------------------
