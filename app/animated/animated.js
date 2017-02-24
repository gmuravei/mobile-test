'use strict';

angular.module('myApp.animated', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/animated', {
            templateUrl: 'animated/animated.html',
            controller: 'AnimatedCtrl'
        });
    }])

    .controller('AnimatedCtrl', ['$scope', 'dragularService', function($scope, dragularService) {
        dragularService('.dragular-scrollable');

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
    }]);