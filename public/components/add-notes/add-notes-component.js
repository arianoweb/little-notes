angular.module('app')

    .directive('addNotes',
        function () {
            return {
                restrict: 'E',
                scope: {
                    "colorClass": '@color',
                    "title": '@title',
                    "accion": '@accion',
                    "icon": '@icon'
                },
                templateUrl: './components/add-notes/add-notes-template.html',
                controller: function ($scope, noteServices) {
                    var vm = $scope;
                    vm.active = false;
                    vm.local = [];
                    vm.menuActive = function(){
                        vm.active = !vm.active;
                        vm.local = noteServices.localNotas;
                        console.log(vm.local);
                        //noteServices.almacenarNotas();
                    };

                    vm.addNota = function (colorActual) {
                        let nota = {
                            title: 'Nueva Nota',
                            color: colorActual,
                            texto: ''
                        };
                        vm.local.unshift(nota);
                        vm.active = false;
                        noteServices.almacenarNotas(vm.local);
                        setTimeout(function () {
                            document.getElementById(noteServices.localNotas[0].$$hashKey).focus;
                        }, 2000);
                    };





                },


            };
        });
