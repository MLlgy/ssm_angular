var app = angular.module("directiveApp", [])

app.directive("funDirective", function () {
  return {
    restrict: "A",
    // scope: {
    //   info: "="
    // },
    scope: {
      //这里使用&符号来接受传入的函数
      btnClick: "&"
      //注意:这里没有加入下方的value模型
    },
    template:
    //一个用于输入文字的输入框，绑定到value上
    "<input type='text' ng-model='value'><br>" +
    //提交的按钮，绑定上方scope的btnClick方法
    //注意传入参数的方式和HTML中具体使用的方式
    "<input type='button' value='提交'  ng-click='btnClick({message:value})'>"



    // template: "<p>姓名:{{info.name}}</p><p>性别：{{info.sex}}</p>"
    // template: "<input type='text' ng-model='info.name'><p>性别：{{info.sex}}</p>"
  }
});

app.controller("ClickController", function ($scope) {
  $scope.clickBtnCallback = function (msg) {
    alert("点击了按钮!信息是：" + msg);
  }
})