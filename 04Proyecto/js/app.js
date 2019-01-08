var app = angular.module('expensesApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl : 'views/expenses.html',
			controller  : 'ExpensesViewController'
		})

		.when('/expenses',{
			templateUrl : 'views/expenses.html',
			controller  : 'ExpensesViewController'
		})

		.when('/expenses/new',{
			templateUrl	: 'views/expenseForm.html',
			controller 	: 'ExpensesViewController'
		})

		.when('/expenses/edit/:id', {
			templateUrl	: 'views/expenseForm.html',
			controller 	: 'ExpensesViewController'
		})

		.otherwise({
			redirectTo: '/'
		})
});

app.factory('Expenses', function(){
	var service = {};

	service.entries = [
		{description: 'food', amount: 10.00015, date: '2014-10-01'},
		{description: 'tiCKetS', amount: 11, date: '2014-10-02'},
		{description: 'a nice chair', amount: 12.11111, date: '2014-10-03'},
		{description: 'Phone Credit', amount: 13, date: '2014-10-04'},
		{description: 'bills', amount: 14, date: '2014-10-04'},
		{description: 'Tomato', amount: 15, date: '2014-10-06'},
	];
	return  service;
});

app.controller('HomeViewController', ['$scope', function($scope){
	$scope.appTitle = 'Simple Expenses Tracker';
}])

app.controller('ExpensesViewController',  ['$scope', 'Expenses', function($scope, Expenses){
	$scope.expenses = Expenses.entries;
}])

app.controller('ExpenseViewController', ['$scope', function($scope){
	$scope.someText = "The world is round" ;
}])

app.controller('ExpenseViewController', ['$scope', '$routeParams', 'Expenses', function($scope, $routeParams, Expenses){

	$scope.someText = "The world is round "  + $routeParams.id + " The first entrie is " + Expenses.entries[0].description;
}])

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
})