/**
 * Created by mahfuz on 7/10/16.
 */
(function () {
    var Node = require('./Node.js');

    var Doubly = function () {
        this._length = 0;
        this.head = null;
        this.tail = null;
    };
    Doubly.prototype.add = function (data) {
        var currentNode = new Node.Node(data);
        if(this.head === null || this._length === 0){
            this.head = currentNode;
            this.tail = currentNode;
        } else {
            this.tail.next = currentNode;
            currentNode.previous = this.tail;
        }
        this.tail = currentNode;
        this._length++;
    };
    Doubly.prototype.length = function () {
        return this._length;
    };
    Doubly.prototype.each = function (fn) {
        var node = this.head;
        while(node != this.tail) {
            fn.call(this, node.value);
            node = node.next;
        }
    };
    Doubly.prototype.indexOf = function (data) {
        if(!data) return -1;
        var node = this.head;
        for(i = 0; i < this._length; i++){
            if (node.value === data) {
                return i;
            }
            node = node.next;
        }
        return -1;
    };
    Doubly.prototype.isExist = function (data) {
        if(!data) return false;
        var node = this.head;
        while(node != this.tail) {
            if (node.value === data) {
                return true;
            }
            node = node.next;
        }
        return false;
    };
    Doubly.prototype.delete = function (data) {
        if(!data) return false;
        var index = this.indexOf(data);
        if(index == -1) return false;
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;
        }
        else {
            var node = this.head;
            for(i = 1; i < index; i++){
                node = node.next;
            }
            var deleteNode = node.next;
            node.next = deleteNode.next;
            deleteNode.next.previous = node;

            if(index == this._length - 1) this.tail = node;
        }

        this._length--;
        return true;
    };

    exports.Doubly = Doubly;
}());
