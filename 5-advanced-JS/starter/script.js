/* 
Prototype Notes

- Every JS object has a prototype property (this makes inheritance possible)
- The prototype property of an object is where we put methods and properties that we want other objects to inherit
- The Constructor's prototype property is NOT the prototype of the Constructor itself; it's the prototype of ALL instances that are created through it
- When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves onto the object's prototype. This continues until the method is found: PROTOTYPE CHAIN


*/
/*

// Function constructor

// object literal example
// var john = {
// 	name: "John",
// 	yearOfBirth: 1990,
// 	job: "teacher",
// };

// function constructor example
// constructors are Capitalized
var Person = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

// attaching function to a constructor via prototypes
Person.prototype.calculateAge = function () {
	console.log(2016 - this.yearOfBirth);
};

// adding methods to an existing constructor via prototypes
Person.prototype.lastName = "Smith";

// "new" operator -> new empty object is created and then function is called that populates newly created object
// using the "new" points the "this" reference to the empty object instead of the global Person constructor; otherwise we override our constructor
var john = new Person("John", 1990, "teacher");
console.log(john); // john object was successfully created

john.calculateAge(); // 26

var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(jane);

*/

/*

// Object.create
var personProto = {
	calculateAge: function () {
		console.log(2016 - this.yearOfBirth);
	},
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
	name: { value: "Jane" },
	yearOfBirth: { value: 1969 },
	job: { value: "designer" },
});

*/

// Primitives vs Objects

// primitive variable -> hold value within variable itself
// object variable -> hold reference pointer to value's location in memory

/*

// primitives
var a = 23;
var b = a;
a = 46;

console.log(a, b); // 46, 23

// objects
var obj1 = {
	name: "John",
	age: 26,
};
var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age, obj2.age); // 30, 30

// functions
var age = 27;
var obj = {
	name: "Jonas",
	city: "Lisbon",
};

function change(a, b) {
	a = 30;
	b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/

// A function is an instance of the Object type
// A function behaves like any other object;
// We can store functions in a variable;
// We can pass a function as an argument to another function;
// We can return a function from a function;

// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

// passing in our callback function (a function passed as an arg that will be called at a later time)
function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

// callback function
function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - 0.67 * el);
	} else {
		return -1;
	}
}

// for callback functions -> do NOT include () as this will cause an instant call of the function
var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
