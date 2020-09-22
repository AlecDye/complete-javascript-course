// separate our project into distinct modules with specific responsibilities
// 1. UI Module -> Displays our data
// 2. Data Module -> Stores and updates our data
// 3. Controller Module -> the go-between for UI and Data

// BUDGET CONTROLLER
var budgetController = (function () {
	var Expense = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: [],
		},
		totals: {
			exp: 0,
			inc: 0,
		},
	};
})();

// UI CONTROLLER
var UIController = (function () {
	var DOMstrings = {
		inputType: ".add__type",
		inputDescription: ".add__description",
		inputValue: ".add__value",
		inputBtn: ".add__btn",
	};

	return {
		getinput: function () {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value,
			};
		},

		getDOMstrings: function () {
			return DOMstrings;
		},
	};
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
	// private functions
	var setupEventListeners = function () {
		var DOM = UICtrl.getDOMstrings();

		// button event listener
		document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

		// keyboard press event listener (global document)
		document.addEventListener("keypress", function (e) {
			if (e.keyCode === 13 || e.which === 13) {
				ctrlAddItem();
			}
		});
	};

	var ctrlAddItem = function () {
		// 1. Get the field input data
		var input = UICtrl.getinput();
		console.log(input);
		// 2. Add the item to the budget controller
		// 3. Add the item to the UI
		// 4. Calc the budget
		// 5. Display the budget
	};

	return {
		init: function () {
			console.log("App has started");
			setupEventListeners();
		},
	};
})(budgetController, UIController);

// the only line of code outside a function so that we can run all the scripts
controller.init();
