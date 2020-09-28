// Lecture: Blocks and IIFEs

// ES6
// block scoped -> data privacy; instead of an IIFE
// {
// 	const a = 1;
// 	let b = 2;
// 	// var is global and only function scoped (not block scoped)
// 	var c = 3;
// }

// console.log(a + b);
// console.log(c)(
// 	// ES5; IIFE
// 	function () {
// 		var c = 3;
// 	}
// )();

// console.log(c);

// Lecture: Strings

// let firstName = "john";
// let lastName = "smith";
// const yearOfBirth = 1990;
// function calcAge(year) {
// 	return 2016 - year;
// }

// Lecture: Arrow functions 2

// ES5
// var box5 = {
// 	color: "green",
// 	position: 1,
// 	clickMe: function () {
// 		var self = this;
// 		document.querySelector(".green").addEventListener("click", function () {
// 			var str = "This is box number " + self.position + " and it is " + self.color;
// 			alert(str);
// 		});
// 	},
// };
// box5.clickMe();

// ES6
// const box6 = {
// 	color: "green",
// 	position: 1,
// 	clickMe: function () {
// 		document.querySelector(".green").addEventListener("click", () => {
// 			var str = "This is box number " + this.position + " and it is " + this.color;
// 			alert(str);
// 		});
// 	},
// };
// box6.clickMe();

// Lecture: Destructuring

// ES5
// var john = ["John", 26];
// var name = john[0];
// var age = john[1];

// ES6
// const [name, age] = ["John", 26];
// console.log(name, age);

// // ES5 Object
// const obj = {
// 	firstName: "John",
// 	lastName: "Smith",
// };

// // ES6
// const { firstName, lastName } = obj;
// console.log(firstName, lastName);

// const { firstName: a, lastName: b } = obj;
// console.log(a, b);

// function calcAgeRetirement(year) {
// 	const age = new Date().getFullYear() - year;
// 	return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1990);
// console.log(age);
// console.log(retirement);

// Lecture: Arrays

// const boxes = document.querySelectorAll(".box");
// returns a node list, NOT an array -> need to convert into array

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// // console.log(boxesArr5);
// boxesArr5.forEach(function (cur) {
// 	cur.style.backgroundColor = "dodgerblue";
// });

// ES6
// const boxesArr6 = Array.from(boxes);
// // transforms nodelist into array automatically
// boxesArr6.forEach((cur) => (cur.style.backgroundColor = "dodgerblue"));

// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
// 	if (boxesArr5[i].className === "box blue") {
// 		continue; // do nothing to elements that fulfill this condition
// 	}

// 	boxesArr5[i].textContent = "I changed to blue!";
// }

// ES6 - for/of
// for (const cur of boxesArr6) {
// 	if (cur.className.includes("blue")) {
// 		continue;
// 	}
// 	cur.textContent = "I changed to blue!";
// }

// // ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function (cur) {
// 	return cur >= 18;
// });

// console.log(full);

// console.log(full.indexOf(true)); // index position of true
// console.log(ages[full.indexOf(true)]); // value of true index

// ES6
// console.log(ages.findIndex((cur) => cur >= 18));
// console.log(ages.find((cur) => cur >= 18));

// Lecture: Spread operator

// function addFourAges(a, b, c, d) {
// 	return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// // ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// // join 2 arrays with spread operator
// const familySmith = ["John", "Jane", "Mark"];
// const familyMiller = ["Mary", "Bob", "Ann"];

// const bigFamily = [...familySmith, "Lily", ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");
// const all = [h, ...boxes];

// Array.from(all).forEach((cur) => (cur.style.color = "purple"));

// Lecture: Rest parameters

// ES5
// function isFullAge5(limit) {
// 	// console.log(arguments);
// 	var argsArr = Array.prototype.slice.call(arguments, 1);
// 	console.log(argsArr);
// 	argsArr.forEach(function (cur) {
// 		console.log(2016 - cur >= limit);
// 	});
// }

// isFullAge5(21, 1990, 1999, 1965);

// // ES6
// function isFullAge6(limit, ...years) {
// 	// transforms arguments into array when passed into func
// 	// console.log(years);
// 	years.forEach((cur) => console.log(2016 - cur >= limit));
// }

// isFullAge6(16, 1990, 1999, 1965);

// Lecture: Default parameters

// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
// 	lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
// 	nationality === undefined ? (nationality = "american") : (nationality = nationality);

// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.nationality = nationality;
// }

// ES6
// function SmithPerson(firstName, yearOfBirth, lastName = "Smith", nationality = "american") {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.nationality = nationality;
// }

// var john = new SmithPerson("John", 1990);
// console.log(john);
