# Console Time: A package to test the run time of your algorithms.

If you like this package, let me know!  Please submit any issues, feature, or pull requests that might better the package.  Thank you!

## Installation

```
npm install console-time
```

## Documentation



The module returns an object with a single property, `run`.  `run` is the function that will test our algorithms.

`run` takes two arguments: `algorithm(s)`, `options`

`algorithm(s)`: Either a function or an array of functions. Each function will take in a single array as an argument.

`options` : An (optional) object to specify options. The properties (and default values) are

	`maxInput`: (Number) The maximum size of the input each algorithm will run with (default 1000).

	`steps`: (Number) The number of steps each algorithm will take (or, number of times an algorithm will run, with varying input sizes) (default 10).

	`verbose` : (Boolean) Indicates whether or not to print the results in the console.


The size of the input for each algorithm call is n, where n += `maxInput` / `steps` until the max input is reached.

`run` will return the results in an array.

### Example:

``` javascript
import consoleTime from 'console-time';

var t = consoleTime.run;

var myAlgos = [bubbleSort, somethingRandom];

var options = {
	max: 10000,
	steps: 10,
	verbose: true
}

t(myAlgos);

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
// where algorithms is an array of algorithsm...
{ results: 
     [ [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object] ],
    name: 'insertSort' },
  { results: 
     [ [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object] ],
    name: 'quickSort' }
    
//where algorithms is a single algorithm...
[ { time: 0, items: 100 },
  { time: 0, items: 200 },
  { time: 0, items: 300 },
  { time: 0, items: 400 },
  { time: 0, items: 500 },
  { time: 0, items: 600 },
  { time: 0, items: 700 },
  { time: 0, items: 800 },
  { time: 0, items: 900 },
  { time: 0, items: 1000 } ]
```

### Example print:

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
