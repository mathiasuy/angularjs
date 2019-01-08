var app = angular.module('expensesApp', [])

app.controller('HomeViewController', ['$scope', function($scope){
	$scope.appTitle = 'Simple Expenses Tracker';
}])

app.controller('ExpensesViewController', ['$scope', function($scope){
	$scope.expenses = [
		{description: 'food', amount: 10.00015, date: '2014-10-01'},
		{description: 'tiCKetS', amount: 11, date: '2014-10-02'},
		{description: 'a nice chair', amount: 12.11111, date: '2014-10-03'},
		{description: 'Phone Credit', amount: 13, date: '2014-10-04'},
		{description: 'bills', amount: 14, date: '2014-10-04'},
		{description: 'Tomato', amount: 15, date: '2014-10-06'},
	]
}])