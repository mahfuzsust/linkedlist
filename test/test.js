/**
 * Created by mahfuz on 6/16/15.
 */
var should = require('chai').should();
var linkedList = require('../index.js');

var doubly = new linkedList.Doubly();

doubly.add(10);
doubly.add(20);
doubly.add(30);
doubly.add(40);

console.log(doubly);

doubly.each(function (item) {
    console.log(item);
});

console.log(doubly.indexOf(20));

doubly.delete(20);

console.log(doubly);

// describe('#linkedList', function () {
//   it('checking addDays', function () {
//       d1.addDays(1).compare(d2).should.equal(0);
//   });
// });
