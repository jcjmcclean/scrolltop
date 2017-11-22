angular
	.module('scrollTop.directive', [])
	.directive('scrollTop', scrollTop);

function scrollTop($anchorScroll) {
	return {
		restrict: "A",
		link: function (scope, element, attrs) {
			element.bind('click', function() {
				$anchorScroll();
			});
		}
	};
}