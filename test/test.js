/**
 * Created by mahfuz on 6/16/15.
 */
var should = require('chai').should();
var datelib = require('../index.js');

var d1 = new Date(2013, 0, 1);
var d2 = new Date(2013, 0, 2);
var d3 = new Date(2013, 1, 1);
var d4 = new Date(2014, 0, 1);
var d5 = new Date(2013, 0, 1);
describe('#datelib', function () {
  it('checking addDays', function () {
      d1.addDays(1).compare(d2).should.equal(0);
  });
  it('checking addMonths', function () {
      d1.addMonths(1).compare(d3).should.equal(0);
  });
  it('checking addYears', function () {
      d1.addYears(1).compare(d4).should.equal(0);
  });
  it('checking addMinutes', function () {
      d1.addMinutes(1).compare(d5).should.equal(1);
      d1.addMinutes(-1).compare(d5).should.equal(-1);
  });
  it('checking addHours', function () {
      d1.addHours(1).compare(d5).should.equal(1);
      d1.addHours(-1).compare(d5).should.equal(-1);
  });
  it('checking addSeconds', function () {
      d1.addSeconds(1).compare(d5).should.equal(1);
      d1.addSeconds(-1).compare(d5).should.equal(-1);
  });
  it('checking isBefore', function () {
      d1.isBefore(d5).should.equal(false);
  });
  it('checking compare', function () {
      d1.compare(d5).should.equal(0);
  });
  it('checking compareWithEquals', function () {
      d1.compareWithEquals(d5).should.equal(1);
  });
  it('checking getDayOfTheWeek', function () {
      d1.getDayOfTheWeek().should.equal("Tuesday");
  });
  it('checking getMonthOfTheYear', function () {
      d1.getMonthOfTheYear().should.equal("January");
  });
});
