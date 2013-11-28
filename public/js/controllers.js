'use strict';

/* Controllers */

var homeCtrl = function ($scope, $resource /*, testService, mySharedService*/)
{

  $scope.total = 0;
  $scope.misComidas = [];
  
  
  var Comida = $resource('/comidas/:id',
                          {id:'@id'},
                           {
                             update: { method : 'put', isArray : false},
                             delete: { method : 'delete', isArray : false } 
                           }
                  );
  
  
  /*
  $scope.msg=function()
                        { mySharedService.prepForBroadcast($scope.misComidas.length);
                        }
  */
  
  
  $scope.newComida = new Comida();

  $scope.totalizar = function()
                        {
                            $scope.total = 0;
                            angular.forEach($scope.misComidas, function(comida) 
                            {
                                $scope.total += comida.cantidad * comida.precio;
                                comida.selected = (comida.cantidad == 0) ? true : false;
                            });
                        }
    
  $scope.agregar = function()
                   {
                     $scope.newComida.id 
                       ?
                       $scope.newComida.$update(function(){
                         $scope.newComida = Comida(); 
                          $scope.totalizar();
                       })
                       :                     
                         $scope.newComida.$save(function(data)
                                              {
                                                $scope.misComidas.push($scope.newComida);
                                                $scope.newComida = Comida();
                                                 $scope.totalizar();
                                              }); 
                      
                   }
  
  Comida.query(function(data)
                  {
                    $scope.misComidas = data;
                    console.log("Comidas del server");
                    console.log(data);
                     $scope.totalizar();
                  });
  
  $scope.update = function(c)
                  {
                    $scope.newComida = c;
                     $scope.totalizar();
                  }
  
  $scope.borrar = function(c,i)
                  {
                    c.$delete(function()
                              {
                                $scope.misComidas.splice(i,1);
                              }
                             );
                     $scope.totalizar();
                  }

}

/*
var shopping = function($scope, mySharedService){
  
    $scope.$on(
        'handleBroadcast', function(){
          $scope.msg = mySharedService.msg;
        }
     );

}
*/

function MyCtrl2 ($scope)
{
  $scope.msg = "ok";
}



angular.module('myApp.controllers', []).
  controller('homeCtrl', homeCtrl)
  .controller('MyCtrl2', MyCtrl2 );