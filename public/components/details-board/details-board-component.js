angular.module('app')

    .directive('detailsBoard',
        function () {
            return {
                restrict: 'E',
                scope: {
                    "colorClass": '@color',
                    "title": '@title',
                    "accion": '@accion',
                    "icon": '@icon'
                },
                templateUrl: './components/details-board/details-board-template.html',
                controller: function ($scope) {
                    var vm = $scope;


                    vm.color = 'button-single-menu button-single-' + vm.colorClass;




                },


            };
        });
