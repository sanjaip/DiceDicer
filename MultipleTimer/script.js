var app = angular.module("myApp", []);

app.directive('w3TestDirective', function() {
  return {
    restrict: "A",
    scope: {
      detail: "@"
    },
    template: "<div id='timer{{details.count}}' ng-style='mystyle' style='margin:4px;padding:5px;'>" +
      "<input type='text' value={{details.name}} />" +
      "{{counters}} @ {{details.targetTime}} for {{details.count}}" +
      "<button style='float:right;' ng-click='reset()'>Reset</button>" +
      "</div>",
    controller: function($scope, $element, $attrs, $timeout) {
        $scope.counters = 5;
        $scope.details = JSON.parse($scope.detail);
        var mytimeout = $timeout(onTimeout, 1000);

        function onTimeout() {
          if ($scope.counters > 0) {
            $scope.mystyle = {
              'background-color': 'green'
            }
            $scope.counters--;
            mytimeout = $timeout(onTimeout, 1000);
          } else if ($scope.counters < -5) {
            $scope.mystyle = {
              'background-color': 'yellow'
            };
             var a = parseInt($scope.details.count)
            $scope.$parent.onRemove(a);
          } else {
            $scope.mystyle = {
              'background-color': 'red'
            };
            $scope.counters--;
            mytimeout = $timeout(onTimeout, 1000);
          }
        };
        $scope.reset = function() {
          $scope.counters = 5;
          mytimeout = $timeout(onTimeout, 1000);
        };
      }
      /*,
      compile: function compile(tElement, tAttributes) {
       console.log(tAttributes.log + ' (compile)');
        return {
          pre: function preLink(scope, element, attributes) {
            console.log(attributes.log + ' (pre-link)');
          },
          post: function postLink(scope, element, attributes) {
            console.log(attributes.log + ' (post-link)');
          }
        };
      }*/
  };
});

app.controller('myCtrl', function($scope, $filter, $timeout) {
  $scope.noOfClockCount = 0;
  $scope.addRow = function() {
    var date = new Date();
    var rtn = $filter('date')(new Date(), 'HH:mm:sss ');
    $scope.noOfClockCount = $scope.noOfClockCount + 1;
    $scope.noOfClocks.push({
      "name": "sanjai",
      "targetTime": rtn,
      "sound": "",
      "notes": "test1",
      "count": $scope.noOfClockCount
    });
  };

  $scope.onRemove = function(currIndex) {
    //console.log($scope.noOfClocks);
   // for (var i = 0; i < $scope.noOfClocks.length; i++) {
    //  if ($scope.noOfClocks[i].count === currIndex) {
        //delete $scope.noOfClocks[currIndex];
       document.getElementById('timer'+currIndex).remove();
   //     console.log($scope.noOfClocks);
    //  }
   // }
  };
  $scope.noOfClocks = [];
});
//https://www.undefinednull.com/2014/02/11/mastering-the-scope-of-a-directive-in-angularjs/
//https://www.toptal.com/angular-js/angular-js-demystifying-directives