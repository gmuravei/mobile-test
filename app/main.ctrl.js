'use strict';

angular.module('myApp.main', ['ngRoute'])
    

    .controller('MainCtrl', ['$scope', '$mdSidenav', '$location', function($scope, $mdSidenav, $location) {

        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
        
        $scope.scroll = false;

        $scope.operateScroll = function (scroll) {
            var div = document.getElementById('app_content');
            if(div) {
                if(scroll){
                    angular.element(div).css('overflow','auto');
                } else {
                    angular.element(div).css('overflow', 'hidden');
                }

            }
        };
        $scope.onSwipeRight = function () {
            $scope.toggleSidenav('left');
        };

        $scope.goTo = function (link) {
            $scope.toggleSidenav('left');
            $location.path('/' + link);
        }
    }]);