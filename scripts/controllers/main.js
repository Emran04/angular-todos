'use strict';
angular.module('todolistApp')
.controller('mainCrtl', function ($scope, dataService) {
	$scope.helloConsole = dataService.helloConsole;

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

	$scope.saveTodo = function (todo) {
		dataService.saveTodo(todo);
	};

	$scope.addTodo = function () {
		 var todo = {name: "This is a new task"};
		 $scope.todos.push(todo);
	}

})