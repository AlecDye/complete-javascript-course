/* 
Prototype Notes

- Every JS object has a prototype property (this makes inheritance possible)
- The prototype property of an object is where we put methods and properties that we want other objects to inherit
- The Constructor's prototype property is NOT the prototype of the Constructor itself; it's the prototype of ALL instances that are created through it
- When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves onto the object's prototype. This continues until the method is found: PROTOTYPE CHAIN


*/

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

console.log(jane.lastName);
