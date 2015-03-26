# Console Time: A package to test the run time of your algorithms.

### Documentation

The module returns an object with a single property, `run`.  `run` is the function that will test our algorithms.

`run` takes three arguments: `algorithm(s)`, `maxInput`, and `steps`;

`algorithm(s)`: Either a function or an array of functions. Each function will take in a single array as an argument.

`maxInput`: The maximum size of the input each algorithm will run with.

`steps`: The number of steps each algorithm will take (or, number of times an algorithm will run, with varying input sizes).

The size of the input for each algorithm call is n, where n += `maxInput` / `steps` until the max input is reached.

Example:

``` javascript
import consoleTime from 'console-time';

var t = consoleTime.run;

var myAlgos = [bubbleSort, somethingRandom];

t(myAlgos, 10000, 20)

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
