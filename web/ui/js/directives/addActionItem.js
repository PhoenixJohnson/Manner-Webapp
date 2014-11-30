/**
 * Created by phoenix on 11/30/14.
 */
TM.directive('shareAction', function ($parse) {
    return {
        require: 'ngModel',
        controller:'addActionItemController',
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            scope.$watch(function () {
                return $parse(ctrl.$modelValue)(scope);
            }, function (newValue) {
                if (newValue ==0) {
                    $(elem).modal('hide');
                    return;
                }
                if (newValue == 1) {
                    $(elem).modal('show');
                    return;
                }
            });
        }
    }
});