/**
 * Created by mahfuz on 6/14/15.
 */

var isValidDate = function(date) {
  return date && date instanceof Date;
};
var isValidNumber = function(number) {
  return number && typeof(number) === 'number';
};

 var addDays = function (date, days) {
   if(!isValidDate(date)) return null;
   if(!isValidNumber(days)) return date;
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

var addSeconds = function (date, seconds) {
  if(!isValidDate(date)) return null;
  if(!isValidNumber(seconds)) return date;
   var result = new Date(date);
  result.setSeconds(result.getSeconds() + seconds);
  return result;
};

var addMinutes = function (date, minutes) {
  if(!isValidDate(date)) return null;
  if(!isValidNumber(minutes)) return date;
   var result = new Date(date);
  result.setMinutes(result.getMinutes() + minutes);
  return result;
};

var addHours = function (date, hours) {
  if(!isValidDate(date)) return null;
  if(!isValidNumber(hours)) return date;
   var result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
};

var addMonths = function (date, months) {
  if(!isValidDate(date)) return null;
  if(!isValidNumber(months)) return date;
   var result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

var addYears = function (date, years) {
  if(!isValidDate(date)) return null;
  if(!isValidNumber(years)) return date;
   var result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
};

var compare = function (d1, d2) {
  if(!isValidDate(d1) || !isValidDate(d2)) return null;
  if( +d1 > +d2) return 1;
  else if (+d1 < +d2) return -1;
  else return 0;
};

var compareWithEquals = function (d1, d2) {
  if(!isValidDate(d1) || !isValidDate(d2)) return null;
  if( +d1 >= +d2) return 1;
  else if (+d1 <= +d2) return -1;
};

exports.addDays = addDays;
exports.addSeconds = addSeconds;
exports.addMinutes = addMinutes;
exports.addHours = addHours;
exports.addMonths = addMonths;
exports.addYears = addYears;
exports.compare = compare;
exports.compareWithEquals = compareWithEquals;
