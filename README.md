# Console Time: A package to test the run time of your algorithms.

If you like this package, let me know!  Please submit any issues, feature, or pull requests that might better the package.  Thank you!

## Installation

```
npm install console-time
```

## Documentation



The module returns an object with a single property, `run`.  `run` is the function that will test our algorithms.

`run` takes three arguments: `algorithm(s)`, `maxInput`, and `steps`;

`algorithm(s)`: Either a function or an array of functions. Each function will take in a single array as an argument.

`maxInput`: The maximum size of the input each algorithm will run with.

`steps`: The number of steps each algorithm will take (or, number of times an algorithm will run, with varying input sizes).

The size of the input for each algorithm call is n, where n += `maxInput` / `steps` until the max input is reached.

### Example:

``` javascript
import consoleTime from 'console-time';

var t = consoleTime.run;

var myAlgos = [bubbleSort, somethingRandom];

t(myAlgos, 10000, 10)

function bubbleSort(array){
  var arr = array.slice(0);
  function swap(a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  for(var i = 0; i < arr.length - 1; i++){
    var smallest = i;
  	for(var j = i+1; j < arr.length; j++){
      if(arr[j] < arr[smallest]) smallest = j;
    }
    swap(smallest, i);
   }
 return arr;
}

function somethingRandom(arr){
	return arr.reduce(function(last, current){
		return last + current;
	});
}
```

### Example output:

```
=== Running: bubbleSort===
items:  1000
timer: 2ms
-------
items:  2000
timer: 4ms
-------
items:  3000
timer: 8ms
-------
items:  4000
timer: 13ms
-------
items:  5000
timer: 21ms
-------
items:  6000
timer: 31ms
-------
items:  7000
timer: 43ms
-------
items:  8000
timer: 53ms
-------
items:  9000
timer: 70ms
-------
items:  10000
timer: 84ms
-------
=== Done running: bubbleSort===
=== Running: somethingRandom===
items:  1000
timer: 0ms
-------
items:  2000
timer: 1ms
-------
items:  3000
timer: 0ms
-------
items:  4000
timer: 0ms
-------
items:  5000
timer: 1ms
-------
items:  6000
timer: 1ms
-------
items:  7000
timer: 0ms
-------
items:  8000
timer: 0ms
-------
items:  9000
timer: 0ms
-------
items:  10000
timer: 0ms
-------
=== Done running: somethingRandom===
```
