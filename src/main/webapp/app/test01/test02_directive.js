var app = angular.module("directiveApp",[]);

app.directive("peopleList",function () {
    return {
      restrict:"E",
      template : "<p>姓名 :{{data.name}}</p><p>性别:{{data.sex}}</p>"
    }
});

app.controller("DirectiveController",function ($scope) {
  $scope.data = {
    name: "ton",
    sex: "boy"
  };
});