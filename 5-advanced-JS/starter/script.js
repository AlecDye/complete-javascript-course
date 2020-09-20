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

/*

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
*/

/*
// Functions returning functions

function interviewQuestion(job) {
	if (job === "designer") {
		return function (name) {
			console.log(name + ", can you please explain what UX design is?");
		};
	} else if (job === "teacher") {
		return function (name) {
			console.log("What subject do you teach, " + name + "?");
		};
	} else {
		return function (name) {
			console.log("Hello " + name + ", what do you do?");
		};
	}
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John"); // "John" replaces the name arg for the inner function

interviewQuestion("teacher")("Mark"); // still works correctly

*/

/*
// IIFE (Immediately Invoked Function Expressions)
// IIFE great for data privacy, not great for reusable code (not assigned to variable so can't be compartmentalized)

// function declaration
function game() {
	// random number between 0 - 9
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();

// IIFE
// trick the parser to see an expression instead of a declaration (otherwise error thrown)
// functions usually need to be named or parsers will error
(function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

// passing args into IIFE
(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);

*/
/*
// Closures

// 1st arg
function retirement(retirementAge) {
	var a = " years left until retirement.";
	// 2nd arg
	return function (yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log(retirementAge - age + a);
	};
}

// saving the function call as a var (outer scope)
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
*/
/*

// calling inner function from variable (inner scope)
retirementUS(1990);
// calling outer function and then inner function
retirement(66)(1990);

*/

// An inner fn always has access to the variables and params of its outer fn, even after the outer fn has returned.

// Scope chain (global -> outer fn -> inner fn) is created from the execution stack, but remains even after the outer fn returns. Meaning fn variables are still present in memory for us to use

/*
function interviewQuestion(job) {
	if (job === "designer") {
		return function (name) {
			console.log(name + ", can you please explain what UX design is?");
		};
	} else if (job === "teacher") {
		return function (name) {
			console.log("What subject do you teach, " + name + "?");
		};
	} else {
		return function (name) {
			console.log("Hello " + name + ", what do you do?");
		};
	}
}
*/
/*
// refactoring to use Closures
// single inner function who's output depends on conditionals
// before it was 3 inner functions that applied to each case
function interviewQuestion(job) {
	return function (name) {
		if (job === "designer") {
			console.log(name + ", can you please explain what UX design is?");
		} else if (job === "teacher") {
			console.log("What subject do you teach, " + name + "?");
		} else {
			console.log("Hello " + name + ", what do you do?");
		}
	};
}

interviewQuestion("teacher")("John");

*/

/*
// Bind, call, and apply

var john = {
	name: "John",
	age: 26,
	job: "teacher",
	presentation: function (style, timeOfDay) {
		if (style === "formal") {
			console.log(
				"Good " +
					timeOfDay +
					", Ladies and gentlemen! I'm " +
					this.name +
					", I'm " +
					this.job +
					" and I'm " +
					this.age +
					" years old."
			);
		} else if (style === "friendly") {
			console.log(
				"Hey whats up? " +
					"I'm " +
					this.name +
					", I'm " +
					this.job +
					" and I'm " +
					this.age +
					" years old. Have a nice " +
					timeOfDay
			);
		}
	},
};

var emily = {
	name: "Emily",
	age: 35,
	job: "designer",
};

john.presentation("formal", "morning!");

// Method Borrowing: this call will transfer john's "this" properties to emily's
john.presentation.call(emily, "friendly", "afternoon");

// john.presentation.call(emily, ["friendly", "afternoon"]);

// bind method returns a func (must be saved to a variable)
// bind can be used to create a function with some preset properties
var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("evening");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("morning");

var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
// pass in a copy of the isFullAge fn with a preset limit (20)
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

*/

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// function constructor
function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

Question.prototype.displayQuestion() = function () {
	console.log(this.question);

	for (var i = 0; i < this.answers.length; i++) {
		console.log(i + ": " + this.answers[i]);
	}
};

// question 1 (question, [possible answers], [correct answer index] )
var q1 = new Question(
	"Is JavaScript the coolest programming langauge in the world?",
	["Yes", "No"],
	0
);

var q2 = new Question(
	"What's the name of the this course's teacher?",
	["John", "Michael", "Jonas"],
	2
);

var q3 = new Question("What does best describe coding?", ["Boring", "Hard", "Fun", "Tedious"], 2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();
