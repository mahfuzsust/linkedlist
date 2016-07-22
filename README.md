# LinkedList

[![NPM version](https://img.shields.io/npm/v/LinkedList.svg?style=flat)](https://www.npmjs.com/package/LinkedList)
[![Downloads](https://img.shields.io/npm/dm/LinkedList.svg?style=flat)](https://npmjs.org/package/LinkedList)
[![apache license](http://img.shields.io/badge/license-apache2-blue.svg?style=flat)](https://github.com/mahfuzsust/LinkedList/blob/master/LICENSE)

## About

A Singly and Doubly Linked List

## Installation

npm install LinkedList

## Usage

```javascript
var LinkedList = require("LinkedList");
var SinglyLinkedList = LinkedList.Singly();
var DoublyLinkedList = LinkedList.Doubly();
```

## Features

*   Provides Linked list data structure.

## Documentation

### Methods

*   [`.add()`](#add)
*   [`.delete()`](#delete)
*   [`.indexOf()`](#indexOf)
*   [`.each()`](#each)
*   [`.isExist()`](#isExist)
*   [`.length()`](#length)

------------------------------------------------

## Example

```javascript
list.add(10);
list.add(20);
list.add(30);
// 10 20 30
list.delete(10);
// 20 30
list.isExist(20); // Returns true, false otherwise
list.indexOf(30); // Returns 1 [0 Based], -1 for not found
list.length(); // Returns 2

list.each(function(item){
    console.log(item);
});
```
