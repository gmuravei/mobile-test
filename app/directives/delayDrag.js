angular.module('myApp.dragDelayDirective', []).directive('dragDelay', ['$timeout', function ($timeout) {
	return {
		restrict: "A",
		link: function( $scope, element ) {

			var touchTimeout,
				draggable = false,
				hold = false,
				timeOutStarts = false;

			element.on( "touchmove mousemove", function( event ) {
				if ( !draggable && hold) {
					event.stopPropagation();
					$timeout.cancel(touchTimeout);
					console.log('timeout canceled move')
					draggable = false;
				}
			});

			element.on( "touchstart mousedown", function( event ) {
				hold = true;

				// if(!timeOutStarts) {
					touchTimeout = $timeout( function() {
						console.log('timeout fires')
						draggable = true;
						timeOutStarts = false
					}, 1000 );
					timeOutStarts = true;
				// }

			});

			element.on( "touchend mouseup", function( event ) {
				hold = true;
				$timeout.cancel( touchTimeout );
				console.log('timeout canceled up')

				draggable = false;
			});
			;

		}
	};
}]);