'use strict';

var arr = ['hello', 'tech', 'wednesday'];

for (var i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
}

arr.forEach(function (element) { console.log(element); } );

arr.forEach(element => console.log(element));

Array.prototype.forEach.call(arr, function (element) { console.log(element); });

Array.prototype.forEach.call(arr, element => { console.log(element); });

for (let element of arr) { console.log(element); }
