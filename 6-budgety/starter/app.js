// separate our project into distinct modules with specific responsibilities
// 1. UI Module -> Displays our data
// 2. Data Module -> Stores and updates our data
// 3. Controller Module -> the go-between for UI and Data

// Controller modules
var budgetController = (function () {
	// these variables are private, cannot be called from outside scope
	// only available to inner scope
	var x = 23;

	var add = function (a) {
		return x + a;
	};

	// this is public and can be executed from outside scope
	return {
		publicTest: function (b) {
			return add(b);
		},
	};
})();

var UIController = (function () {
	// some code
})();

// connect budget & UI into args
// by naming the arg differently than the variable, if the global variable is changed we don't need to worry about the name inside this module
var controller = (function (budgetCtrl, UICtrl) {
	var z = budgetCtrl.publicTest(5);

	return {
		anotherPublic: function () {
			console.log(z);
		},
	};
})(budgetController, UIController);
