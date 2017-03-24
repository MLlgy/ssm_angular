var app = angular.module("directiveApp", [])

app.directive("templateUrlTest", function () {
  return {
    restrict: "A",
    scope: {
    },
    //谷歌浏览器不显示
    // templateUrl: "part.html"
    //或者
    templateUrl: function () {
      return "part.html";
    }
  }
});

app.controller("templateUrlController", function ($scope) {

})