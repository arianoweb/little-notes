angular.module('app')

    .directive('noteSingle',
        function () {
            return {
                restrict: 'E',
                scope: {
                    "colorClass": '@color',
                    "title": '@title',
                    "id": '=id',
                    "texto": '@texto',
                    "key":'=key' 
                },
                templateUrl: './components/note-single/note-single-template.html',
                controller: function ($scope, noteServices) {
                    var vm = $scope;
                    let activo = 'button-single-menu';
                    if (vm.colorClass == 'purple'){
                       //activo = 'button-single-menu-maximized'
                        
                    }
                    vm.color = activo+' button-single-' + vm.colorClass;
                    vm.refreshText = (key)=>{
                        vm.texto = document.getElementById(key).innerText;
                        vm.title = document.getElementById('title'+key).innerText;
                        noteServices.localNotas[noteServices.notaActiva(key)].texto = vm.texto;
                        noteServices.localNotas[noteServices.notaActiva(key)].title = vm.title;    
                        noteServices.almacenarNotas(noteServices.localNotas);
                    },

                    vm.deleteNote = (key)=>{
                          noteServices.localNotas.splice(noteServices.notaActiva(key),1);
                          noteServices.almacenarNotas(noteServices.localNotas);  
                    
                    }




                },


            };
        });
