var app = angular.module("linkApp",[])

app.directive("linkDirective",function () {
  return {
    restrict:"A",
    scope:{
      a:"=",
      b:"=",
      c:"="
    },
    link:function (scope , element , attrs) {
      console.log(scope);
      console.log(JSON.stringify(element));
      console.log(JSON.stringify(attrs));
    }
  }
})