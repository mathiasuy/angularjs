var app = angular.module('expensesApp', [])

app.controller('HomeViewController', ['$scope', function($scope){
	$scope.appTitle = 'Simple Expenses Tracker';
}])

app.controller('ExpensesViewController', ['$scope', function($scope){
	$scope.expenses = [
		{description: 'food', amount: 10, date: '2014-10-01'},
		{description: 'tickets', amount: 11, date: '2014-10-02'},
		{description: 'a nice chair', amount: 12, date: '2014-10-03'},
		{description: 'phone credit', amount: 13, date: '2014-10-04'},
		{description: 'bills', amount: 14, date: '2014-10-04'},
		{description: 'tomato', amount: 15, date: '2014-10-06'},
	]
}])

// FILTRO PERSONALIZADO (Primera letra en mayuscula el resto en minuscula, letra capital)
app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
})