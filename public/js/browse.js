/**
 * Created by aashish on 11/8/15.
 */
var app = angular.module('myApp',['ngMaterial']);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/Technology',
    {
      templateUrl:'template/Technology.html',
      controller:'techCtrl'
    })
  }
  ]);

app.controller('browsectrl',function($scope,$location,$http){
    console.log('In browse controller');
    $scope.catags = ["Technology","Science","Daily Life","General","Other"];
    $scope.path = "All Categories";

    $scope.expand = function ($args) {
      $scope.path = $scope.catags[$args];
    }

    $scope.myvar = false;

   $http.get('/data').success(function(response){
       console.log(response);
        if(response.data){
       if(response.data.facebookConected==true){
          if(response.data.gender=='male'){
             if(response.data.facebookphotourl!=null){
                $scope.avatar=response.data.facebookphotourl;
             }
              else{
                $scope.avatar='images/avatars/male/m1.png';
             }
          }
           else if(response.data.gender==female){
              if(response.data.facebookphotourl!=null){
                  $scope.avatar=response.data.facebookphotourl;
              }
              else{
                  $scope.avatar='images/avatars/female/f3.png';
              }
          }
       }
        else if(response.data.googleConnected==true){
           if(response.data.gender=='male'){
               if(response.data.googlephotourl!=null){
                   $scope.avatar=response.data.googlephotourl;
               }
               else{
                   $scope.avatar='images/avatars/male/m1.png';
               }
           }
           else if(response.data.gender==female){
               if(response.data.googlephotourl!=null){
                   $scope.avatar=response.data.googlephotourl;
               }
               else{
                   $scope.avatar='images/avatars/female/f3.png';
               }
           }
       }
        }

        else if(response.message){
            //showCustomToast();
            //response.message = null;
        }

    });

});

app.controller('techCtrl',function ($scope) {
  alert("Technology controller");
});