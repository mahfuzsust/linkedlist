/**
 * Created by mahfuz on 7/10/16.
 */
 (function () {
   var en = require('./EN.js');
   var getDaysOfLanguage = function(lang) {
     if(!lang) return en.days;
     switch (lang) {
       case 'EN':
         return en.days;
       default:
          return en.days;
     }
   };
   var getMonthsOfLanguage = function(lang) {
     if(!lang) return en.months;
     switch (lang) {
       case 'EN':
         return en.months;
       default:
          return en.months;
     }
   };
  var isValidDate = function(date) {
    return date && date instanceof Date;
  };
  var isValidNumber = function(number) {
    return number && typeof(number) === 'number';
  };

   Date.prototype.addDays = function (days) {
     var result = new Date(this.valueOf());
     if(!isValidNumber(days)) return result;

      result.setDate(result.getDate() + days);
      return result;
  };

  Date.prototype.addSeconds = function (seconds) {
   var result = new Date(this.valueOf());
    if(!isValidNumber(seconds)) return result;
    result.setSeconds(result.getSeconds() + seconds);
    return result;
  };

  Date.prototype.addMinutes = function (minutes) {
   var result = new Date(this.valueOf());
    if(!isValidNumber(minutes)) return result;
    result.setMinutes(result.getMinutes() + minutes);
    return result;
  };

  Date.prototype.addHours = function (hours) {
   var result = new Date(this.valueOf());
    if(!isValidNumber(hours)) return result;
    result.setHours(result.getHours() + hours);
    return result;
  };

  Date.prototype.addMonths = function (months) {
   var result = new Date(this.valueOf());
    if(!isValidNumber(months)) return result;
    result.setMonth(result.getMonth() + months);
    return result;
  };

  Date.prototype.addYears = function (years) {
   var result = new Date(this.valueOf());
    if(!isValidNumber(years)) return result;
    result.setFullYear(result.getFullYear() + years);
    return result;
  };

  Date.prototype.addMilliseconds = function (milliseconds) {
   var result = new Date(this.valueOf());
    if(!isValidNumber(milliseconds)) return result;
    result.setMilliseconds(result.getMilliseconds() + milliseconds);
    return result;
  };

  Date.prototype.compare = function (date) {
    if(!isValidDate(date)) return null;
    var result = new Date(this.valueOf());
    if( +result > +date) return 1;
    else if (+result < +date) return -1;
    else return 0;
  };

  Date.prototype.compareWithEquals = function (date) {
    if(!isValidDate(date)) return null;
    var result = new Date(this.valueOf());
    if( +result >= +date) return 1;
    else if (+result <= +date) return -1;
  };

  Date.prototype.isBefore = function (date) {
    if(!isValidDate(date)) return null;
    var result = new Date(this.valueOf());
    return result.compare(date) === -1;
  };
  Date.prototype.getDayOfTheWeek = function (lang) {
    var result = new Date(this.valueOf());
    return getDaysOfLanguage(lang)[result.getDay()];
  };

  Date.prototype.getMonthOfTheYear = function (lang) {
    var result = new Date(this.valueOf());
    return getMonthsOfLanguage(lang)[result.getMonth()];
  };
}());
