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
console.log(c)(
	// ES5; IIFE
	function () {
		var c = 3;
	}
)();

// console.log(c);
