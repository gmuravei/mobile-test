'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/native', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  $scope.elems = [
    {
      name:'1',
      color: 'red'
    },
    {
      name:'2',
      color: 'green'
    },
    {
      name:'3',
      color: 'black'
    },
    {
      name:'4',
      color: 'white'
    },
    {
      name:'5',
      color: 'yellow'
    },
    {
      name:'6',
      color: 'pink'
    },
    {
      name:'7',
      color: 'cyan'
    },
    {
      name:'8',
      color: 'red'
    },
    {
      name:'9',
      color: 'green'
    },
    {
      name:'0',
      color: 'black'
    },
    {
      name:'11',
      color: 'white'
    },
    {
      name:'22',
      color: 'yellow'
    },
    {
      name:'33',
      color: 'pink'
    },
    {
      name:'44',
      color: 'cyan'
    },
    {
      name:'55',
      color: 'red'
    },
    {
      name:'66',
      color: 'green'
    },
    {
      name:'77',
      color: 'black'
    },
    {
      name:'88',
      color: 'white'
    },
    {
      name:'99',
      color: 'yellow'
    },
    {
      name:'00',
      color: 'pink'
    },
    {
      name:'234',
      color: 'cyan'
    }
  ];
  function arrayObjectIndexOf(arr, obj){
    for(var i = 0; i < arr.length; i++){
      if(angular.equals(arr[i], obj)){
        return i;
      }
    }
    return -1;
  }

  function swap (a, item, index) {
    a = a.slice(0, index)
        .concat(item)
        .concat(a.slice(index));
    return a;
  };
  
  $scope.dropSuccessHandler = function ($event,$index,elem) {
    $scope.elems = $scope.elems.filter(function(item) { return !item.selected; });
  };

  $scope.onDrop = function ($event,$data,elem) {
    var indexdata = arrayObjectIndexOf($scope.elems, $data);
    var indexelem = arrayObjectIndexOf($scope.elems, elem);
    $scope.elems[indexdata].selected = true;
    if (indexdata < indexelem) {
      indexelem++
    }

    $scope.elems = swap($scope.elems,[$data],indexelem);
  };
  

}]);