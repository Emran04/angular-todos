'use strict';
angular.module('todolistApp')
.controller('mainCrtl', function ($scope, dataService) {

	$scope.helloNgChange = function () {
		 console.log('Hello there!! This is helloWorld controller function in mainCrtl') ;
	};

	dataService.getTodos(function (response) {
	 	console.log(response.data);
	 	$scope.todos = response.data;
	});

	$scope.deleteTodo = function (todo, $index) {
		 dataService.deleteTodo(todo);
		 $scope.todos.splice($index, 1);
	};

	$scope.saveTodos = function () {
		var filteredTodos = $scope.todos.filter(function (todo) {
			 if ( todo.edited ) {
			 	return todo;
			 };
		});
		dataService.saveTodos(filteredTodos);
	};

	$scope.addTodo = function () {
		 var todo = {name: "Edit here..."};
		 $scope.todos.unshift(todo);
	}

})