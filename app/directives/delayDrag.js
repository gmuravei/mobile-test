angular.module('myApp.dragDelayDirective', []).directive('dragDelay', ['$timeout', function ($timeout) {
	return {
		restrict: "A",
		link: function( scope, element ) {

			var touchTimeout,
				draggable = false;

			element.on( "touchmove mousemove", function( event ) {
				if ( !draggable ) {
					event.stopImmediatePropagation();
					$timeout.cancel(touchTimeout);
					draggable = false;
				}
			});

			element.on( "touchstart mousedown", function( event ) {
				touchTimeout = $timeout( function() {
					draggable = true;
				}, 1000 );
			});

			element.on( "touchend mouseup", function( event ) {
				$timeout.cancel( touchTimeout );
				draggable = false;
			});

		}
	};
}]);