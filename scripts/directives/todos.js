'use strict';
angular.module('todolistApp')
.directive('todos', function () {
	 return {
	 	templateUrl: 'templates/todos.html',
	 	controller: 'mainCrtl',
	 	replace: true
	 } 
})