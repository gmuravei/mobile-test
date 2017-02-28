angular.module('myApp.dragDelayDirective', []).directive('dragDelay', ['$timeout', function ($timeout) {
	return {
		restrict: "A",
		link: function( $scope, element ) {

			var touchTimeout,
				draggable = false,
				hold = false,
				timeOutStarts = false;
			function checkTime () {
				if(new Date() - $scope.startTime < 1000) {

					return true;
				} else {
                    console.log('time fires')
                    return false;
				}

            }
			element.on( "touchmove mousemove", function( event ) {
				if ( checkTime() && hold) {
					event.stopImmediatePropagation();
					// $timeout.cancel(touchTimeout);
					console.log('timeout canceled move')
					draggable = false;
				} else {
					// if(!element.hasClass('big-box')) {
                     //    element.addClass('big-box');
					// }
				}
			});

			element.on( "touchstart mousedown", function( event ) {
				hold = true;
				$scope.startTime = new Date();
			});

			element.on( "touchend", function( event ) {
				hold = true;
                // element.removeClass('big-box');
				$timeout.cancel( touchTimeout );
				console.log('timeout canceled up')

				draggable = false;
			});

		}
	};
}]);