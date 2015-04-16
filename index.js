
function entry(sort, options){
	
	var max = options.max || 1000;
	var interval = options.steps || 10;
	var verbose = options.verbose === false ? false : true;

	if (typeof sort === 'function'){
		if(verbose) printStart(functionName(sort));
		var sortResults = generateInputs(max, interval).map(function(item, index){
			return run(sort, createArray(item), verbose);
		});
		if(verbose) printDone(functionName(sort)); 
	} else if (Array.isArray(sort)){
		var sortResults = sort.map(function(item, index){
			return entry(item, options);
		});
	} else {
		throw new Error('run only accepts a function or an array of functions to test.');	
	};
	return sortResults;
};

function run(sort, array, verbose){
		  var start = new Date();
		  sort(array);
		  var end = new Date();
		  var time = end - start; 
			if(verbose) printTime(array.length, time);	
			return {
				time: time,
				items: array.length
			};
}

function functionName(fun) {
	var ret = fun.toString();
	ret = ret.substr('function '.length);
	ret = ret.substr(0, ret.indexOf('('));
	return ret;
};

function printTime(items, time){
	console.log('items: ' + items);
	console.log('time: ' + time);
	console.log('-------');
};

function printStart(name){	
	console.log('=== Running ' + name + ' ===');
};

function printDone(name){
	console.log('=== Done running: ' + name + ' ===');
}

function createArray(size){
  var arr = [];
  for(var i = 0; i < size; i++){
		arr.push(generateRandom(size));
  }
  return arr;
};

function generateRandom(size){
	return (Math.floor(Math.random() * size));
} 


function generateInputs(max, interval){
  var arr = [];
  var step = Math.floor(max/interval);
  for(var i = step; i <=max; i += step){
  	arr.push(i);
	}
	return arr;
};

module.exports =  { run:entry, mock:generateInputs };
