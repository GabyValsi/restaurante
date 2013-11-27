'use strict';

/* Controllers */

function homeCtrl ($scope)
{
  $scope.msg = "ok";
  
  $scope.platillos = [
    {"nombre":"Enchiladas", "costo": 10.00},
    {"nombre":"Pozole", "costo": 30.00},
    {"nombre":"Pan Dulce Mex.", "costo": 20.00},
    
  ];
  
}


function MyCtrl2 ($scope)
{
  $scope.msg = "ok";
}


angular.module('myApp.controllers', []).
  controller('homeCtrl', homeCtrl)
  .controller('MyCtrl2', MyCtrl2);