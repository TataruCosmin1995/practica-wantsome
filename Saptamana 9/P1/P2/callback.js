//Link 1
const func1 = () => {
    setTimeout( () =>
    console.log('1'), 4000)
  }
  
  const func2 = () => {
      setTimeout( () =>
      console.log('2'), 3000)
  }
  
  const func3 = () => {
      console.log('3')
  }
  
  const func4 = () => {
      setTimeout ( () =>
      console.log('4'), 5000)
  }
  
  const func5 = () => {
      setTimeout ( () =>
      console.log('5'), 2000)
  }
  
  
  func1();
  func2();
  func3();
  func4();
  func5();


// Link 2
// 1

function customMap(array, callback) {
	var arr = [];
	for(var index in array){
		arr.push(callback(array[index]));
	}
	return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const increment = (value) => {
     return value + 1;
}
console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console




const double = (value) => { 
     return value * 2;
}
console.log(customMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]



const square = (value) => { 
     return value * value;
}
console.log(customMap(randomArray, square));
console.log(myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]


// 2

// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(name, age) {
  var filteredArray = [];
  for (var i = 0; i < name.length; i++) {
    var result = name[i];
    if (age(result)) {
      filteredArray.push(result);
    }
  }
  return filteredArray;
};


// Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )

const evenNumbers = even => even % 2 === 0 ? true : false;
const divideByThree = byThree => byThree % 3 === 0 ? true : false;


// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

