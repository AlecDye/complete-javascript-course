// Lecture: Blocks and IIFEs

// ES6
// block scoped -> data privacy; instead of an IIFE
{
	const a = 1;
	let b = 2;
	// var is global and only function scoped (not block scoped)
	var c = 3;
}

// console.log(a + b);
// console.log(c)(
// 	// ES5; IIFE
// 	function () {
// 		var c = 3;
// 	}
// )();

// console.log(c);

// Lecture: Strings

let firstName = "john";
let lastName = "smith";
const yearOfBirth = 1990;
function calcAge(year) {
	return 2016 - year;
}

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
const box6 = {
	color: "green",
	position: 1,
	clickMe: function () {
		document.querySelector(".green").addEventListener("click", () => {
			var str = "This is box number " + this.position + " and it is " + this.color;
			alert(str);
		});
	},
};
box6.clickMe();
