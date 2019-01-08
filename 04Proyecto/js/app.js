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
			controller 	: 'ExpenseViewController'
		})

		.when('/expenses/edit/:id', {
			templateUrl	: 'views/expenseForm.html',
			controller 	: 'ExpenseViewController'
		})

		.otherwise({
			redirectTo: '/'
		})
});

app.factory('Expenses', function(){
	var service = {};

	service.entries = [
		{id : 1, description: 'food', amount: 10.00015, date: '2014-10-01'},
		{id : 2, description: 'tiCKetS', amount: 11, date: '2014-10-02'},
		{id : 3, description: 'a nice chair', amount: 12.11111, date: '2014-10-03'},
		{id : 4, description: 'Phone Credit', amount: 13, date: '2014-10-04'},
		{id : 5, description: 'bills', amount: 14, date: '2014-10-04'},
		{id : 6, description: 'Tomato', amount: 15, date: '2014-10-06'},
	];

	//convertir a objeto Date
	service.entries.forEach(function(element){
		element.date = new Date(element.date); 
	});

	//Para guardar
	service.save = function(entry){
		service.entries.push(entry);
	}

	//Para obtener un nuevo id:
	service.getNewId = function(){
		if (service.newId){
			service.newId++;
			return service.newId;
		}else{
			//funcion de la libreria Underscore que devuelve el elemento con entry.id más alto:
			var entryMaxId = _.max(service.entries, function(entry){
				return entry.id;
			});
			service.newId = entryMaxId.id + 1;
			return service.newId;
		}
	}
	
	return  service;
});

app.controller('HomeViewController',  ['$scope', 'Expenses', function($scope, Expenses){
	
}])


//Listado de todos los elementos
app.controller('ExpensesViewController',  ['$scope', 'Expenses', function($scope, Expenses){
	$scope.expenses = Expenses.entries;
}])

//Crear o editar un elemento
app.controller('ExpenseViewController', ['$scope', '$routeParams', '$location', 'Expenses', function($scope, $routeParams, $location, Expenses){
	//$scope.someText = "The world is round "  + $routeParams.id + " The first entrie is " + Expenses.entries[0].description;
	if (!$routeParams.id){
		var newId = Expenses.getNewId();
		$scope.expense = {id : newId, description: 'algo ' + newId, amount: 10, date: new Date()};
	}

	$scope.save = function() {
		Expenses.save($scope.expense);// dejamos que el servicio se encarge de guardarlo en el modelo
		$location.path('/');
	}

}])

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
})