var app = angular.module("expensesApp", []);

//app es el modulo creado, luego se le pasa el nombre del controlador y un array con dependencias
//una variable para el ambito, nos da acceso a mosrtar cosas de aca. Primero se pone como 
//String y luego la funcion con la logica del controlador
//Si se utiliza algoritmos de minificacion de javascript, los nombres de variable se pueden perder 
//pero pasandole le nombre de variable como string, se conservara
app.controller('ExpensesViewController', ['$scope', function($scope){

	$scope.expense = {
		description: 'food',
		amount: 10
	};

	$scope.description = 'Ejemplo con enlazado bidireccional, puede notarse como se actualizan en el momento los relacionados entre si';
	
	$scope.increaseAmount = function(){
		$scope.expense.amount++;
	}

}]);