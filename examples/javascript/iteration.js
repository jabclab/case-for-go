'use strict';

var lg = console.log.bind(console);
var arr = ['hello', 'tech', 'wednesday'];

for (var i = 0, len = arr.length; i < len; i++) {
    lg(arr[i]);
}

arr.forEach(function (element) { lg(element); } );

arr.forEach(element => lg(element));

Array.prototype.forEach.call(arr, function (element) { lg(element); });

Array.prototype.forEach.call(arr, element => { lg(element); });

for (let element of arr) { lg(element); }
