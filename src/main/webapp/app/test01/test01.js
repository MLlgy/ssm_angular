var app = angular.module("myApp",[]);

/**
 * funtion(){}封装的函数，firstController。
 * 这个概念相对容易理解，我们需要注意的，是我们在function中传入的参数$scope。
 与一般的函数声明时的参数不同，此处的参数是不可随意命名的，
 AngularJS会解析参数的名称，并转化为对应的对象传入。
 这里使用的$scope，用于将ng-controller中的数据和HTML代码绑定起来，
 传入$scope的数据，可以直接在HTML代码中调用。在上面的例子中，我们对$s
 cope传入了{data:{message:"Hello"}}对象，
 并在HTML代码中直接使用了data.message来调用。
 */
app.controller("firstController",function ($scope) {
  //scope绑定一个变量
  $scope.data = {
    message:"first angularjs",
    flag: true
  }
  /**
   * 在$scope中绑定一个函数
   */
  $scope.onclick = function () {
    alert($scope.data.message)
  }

  $scope.list = [
    {
      name: "Harry",
      last: "uu"
    },
    {
      name: "Tom",
      last: "uu"
    },
    {
      name: "Jerry",
      last: "uu"
    }
  ]

  $scope.onclick = function (index) {
    alert("click :"+ index + "行" )
  }
  //过滤器搜索字段
  $scope.searchText = "";

  $scope.searchString = {name:"T", last:"H"};


  $scope.secondData = {
    deleted : false,
    important: false,
    error : false
  }

})
/**
 * 过滤器
 */
app.filter("reverse",function () {
  return function (text) {
    return text.split("").reverse().join("");
  }
})