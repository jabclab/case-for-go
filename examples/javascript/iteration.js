var arr = ['hello', 'tech', 'wednesday'];

for (var i = 0, len = arr.length; i < len; i++) {
    var element = arr[i];
    // ...
}

arr.forEach(function (element) { /* ... */ } );

arr.forEach(element => { /* ... */ });

Array.prototype.forEach.call(arr, function (element) { /* ... */ });

Array.prototype.forEach.call(arr, element => { /* ... */ });

for (let element of arr) { /* ... */ }
