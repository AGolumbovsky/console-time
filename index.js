
function run(sort, max, interval){
	if (typeof sort === 'function'){
		console.log('=== Running: ' + functionName(sort) + ' ===');
		generateInputs(max, interval).forEach(function(item, index){
			var array = createArray(item);
		  console.log('items: ', array.length);
		  console.time('timer');
		  sort(array);
	  	console.timeEnd('timer');
	  	console.log('-------');
		});
		console.log('=== Done running: ' + functionName(sort) + ' ===');
	} else if (Array.isArray(sort)){
		sort.forEach(function(item, index){
			run(item, max, interval);
		});
	} else {
		throw new Error('run only accepts a function or an array of functions to test.');	
	};
};


function functionName(fun) {
	var ret = fun.toString();
	ret = ret.substr('function '.length);
	ret = ret.substr(0, ret.indexOf('('));
	return ret;
}

function createArray(size){
  var arr = [];
  function generateRandom(){
    return (Math.floor(Math.random() * size));
	}
  for(var i = 0; i < size; i++){
		arr.push(generateRandom());
  }
  return arr;
}

function generateInputs(max, interval){
  var arr = [];
  var step = Math.floor(max/interval);
  for(var i = step; i <=max; i += step){
  	arr.push(i);
	}
	return arr;
}

module.exports =  { run:run };
