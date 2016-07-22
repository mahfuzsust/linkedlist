/**
 * Created by mahfuz on 7/10/16.
 */
(function () {
    var Node = require('./Node.js');

    var Singly = function () {
        this._length = 0;
        this.head = null;
    };
    Singly.prototype.add = function (data) {
        var currentNode = new Node.Node(data);
        if(this.head === null || this._length === 0){
            this.head = currentNode;
        } else {
            var node = this.head;
            while(node.next){
                node = node.next;
            }
            node.next = currentNode;
        }
        this._length++;
    };
    Singly.prototype.length = function () {
        return this._length;
    };
    Singly.prototype.each = function (fn) {
        var node = this.head;
        for(i = 0; i < this._length; i++){
            fn.call(this, node.value);
            node = node.next;
        }
    };
    Singly.prototype.indexOf = function (data) {
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
    Singly.prototype.isExist = function (data) {
        if(!data) return false;
        var node = this.head;
        for(i = 0; i < this._length; i++){
            if (node.value === data) {
                return true;
            }
            node = node.next;
        }
        return false;
    };
    Singly.prototype.delete = function (data) {
        if(!data) return false;
        var index = this.indexOf(data);
        if(index == -1) return false;
        if (index === 0) {
            this.head = this.head.next;
        }
        else {
            var node = this.head;
            for(i = 1; i < index; i++){
                node = node.next;
            }
            node.next = node.next.next;
        }

        this._length--;
        return true;
    };

    exports.Singly = Singly;
}());
