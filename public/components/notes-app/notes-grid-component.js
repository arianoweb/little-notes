angular.module('app')

    .controller('notesController', ['$scope', 'noteServices',

        function ($scope, noteServices) {

            onInit();
            function onInit() {
                noteServices.localNotas = noteServices.obtenerNotas();
            }
        }
    ])
    .directive('listNotes',
        function () {
            return {
                restrict: 'E',
                templateUrl: 'components/notes-app/notes-grid-template.html',
                controller: function ($scope, noteServices) {
                    var vm = $scope;

                    vm.notas = noteServices.localNotas;
                    vm.maximizedActive = 'menu-button-grid';
                    if (vm.colorClass == 'purple') {
                        vm.maximizedActive = 'menu-button-grid-maximized'

                    }





                },
            };
        });
