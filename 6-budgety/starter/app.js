// separate our project into distinct modules with specific responsibilities
// 1. UI Module -> Displays our data
// 2. Data Module -> Stores and updates our data
// 3. Controller Module -> the go-between for UI and Data

// BUDGET CONTROLLER
var budgetController = (function () {
	// some code
})();

// UI CONTROLLER
var UIController = (function () {
	// some code
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
	var ctrlAddItem = function () {
		// 1. Get the field input data
		// 2. Add the item to the budget controller
		// 3. Add the item to the UI
		// 4. Calc the budget
		// 5. Display the budget
		console.log("It works");
	};

	document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

	document.addEventListener("keypress", function (e) {
		if (e.keyCode === 13 || e.which === 13) {
			ctrlAddItem();
		}
	});
})(budgetController, UIController);
