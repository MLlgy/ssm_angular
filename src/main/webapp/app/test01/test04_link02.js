var app = angular.module("linkApp", [])

app.directive("linkDirectiveJquery", function () {
  return {
    restrict: "A",
    template: "<h1>标题</h1><p>这里是段落文字</p>",
    // link:function (scope , element , attrs) {
    //   element.children("h1").addClass("strike")
    // }

    link: function(scope, element, attrs){
      element.children("h1").bind("mouseenter", function(){
        element.children("h1").addClass("strike");
        element.children("h1").text("鼠标移过来了");
      });

      element.children("h1").bind("mouseleave", function(){
        element.children("h1").removeClass("strike");
        element.children("h1").text("鼠标移开了");
      })
    }
  }
})

app.controller("linkController",function () {
  
})