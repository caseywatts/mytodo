'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var ref = new Firebase("https://vivid-fire-3333.firebaseio.com/");
    var sync = $firebase(ref);

    $scope.users={
      "users": {
        "csw3": {
          "name": "Casey Watts",
          "present": false
        },
        "amc95": {
          "name": "Adriana Corona",
          "present": false
        }
      }
    }
    // $scope.todos=[{name: "Casey"}, {name: "Adriana"}, {name: "Stuart"}]
    // $scope.todos = sync.$asArray();

    // var todosInStore = localStorageService.get('todos');

    // $scope.todos = todosInStore && todosInStore.split('\n') || [];

    // $scope.$watch('todos', function () {
    //   localStorageService.add('todos', $scope.todos.join('\n'));
    // }, true);
    $scope.addTodo = function () {
      $scope.todos.$add($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.$remove(index);
    };
  });
