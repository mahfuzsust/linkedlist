/**
 * Created by mahfuz on 6/16/15.
 */
var should = require('chai').should();
var datelib = require('../index.js');

var d1 = new Date(2013, 0, 1);
var d2 = new Date(2013, 0, 2);
var d3 = new Date(2013, 1, 1);
var d4 = new Date(2014, 0, 1);
describe('#datelib', function () {
  it('checking addDays', function () {
      datelib.compare(datelib.addDays(d1, 1), d2).should.equal(0);
  });
  it('checking addMonths', function () {
      datelib.compare(datelib.addMonths(d1, 1), d3).should.equal(0);
  });
  it('checking addYears', function () {
      datelib.compare(datelib.addYears(d1, 1), d4).should.equal(0);
  });
});
