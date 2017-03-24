var app = angular.module("directiveApp", [])

app.directive("mutiPeople", function () {
  return {
    restrict: "A",
    scope: {
      info: "="
    },
    // template: "<p>姓名:{{info.name}}</p><p>性别：{{info.sex}}</p>"
    template: "<input type='text' ng-model='info.name'><p>性别：{{info.sex}}</p>"
  }
});

app.controller("MutiPeopleController", function ($scope) {
  $scope.harry = {
    name: "u0u00",
    sex: "男"
  }


  $scope.peopleList = [
    {
      name: "Harry",
      sex: "男"
    },
    {
      name: "张三",
      sex: "男"
    }
  ];
})