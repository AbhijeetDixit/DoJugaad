/**
 * Created by aashish on 11/8/15.
 */
var app = angular.module('myApp',['ngMaterial']);


app.controller('browsectrl',function($scope,$location,$http){
    console.log('In browse controller');
    $scope.catags = ["Technology","Science","Daily Life","General","Other"];
    $scope.path = "All Catagories";

    $scope.expand = function () {
        alert('Expand');
    }

});



