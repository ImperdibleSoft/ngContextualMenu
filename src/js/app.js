var app = angular.module('app', ['ngRoute', 'ngContextualMenu']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/view.html',
      controller: 'viewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('mainController', ['$scope', function($scope){

  // All this stuff is entirely OPTIONAL.
  $scope.options = {};

}]);

app.controller('viewController', ['$scope', function($scope){

  // All this stuff is entirely OPTIONAL.
  $scope.options = {};

  // This will load a theme at startup.
  // $scope.options.customTheme = {
  //   bgColor: "white",
  //   hoverColor: "#2b8d17",
  //   spacerColor: "#e3e3e3"
  // };

  // This will make these commands available for users.
  $scope.options.customActions = [
    {
      label: "<i class='icon ion-social-facebook'></i> Compartir en Facebook",
      action: function(){
        alert("Compartido");
      }
    },
    {
      label: "<i class='icon ion-social-googleplus'></i> Compartir en Google+",
      action: function(){
        alert("Compartido");
      }
    },
    {
      label: "<i class='icon ion-social-twitter'></i> Compartir en Twitter",
      action: function(){
        alert("Compartido");
      }
    },
    {
      label: "<i class='icon ion-social-pinterest'></i> Compartir en Pinterest",
      action: function(){
        alert("Compartido");
      }
    },
    {
      label: "<i class='icon ion-social-youtube'></i> Compartir en Youtube",
      action: function(){
        alert("Compartido");
      }
    },
    {
      spacer: true
    },
    {
      label: "Alert",
      action: function(){
        console.log("Hello, this is an alert.");
      }
    },
    {
      label: "Console log",
      action: function(){
        console.log("Hi. This message is on the console.");
      }
    },
    {
      spacer: true
    },
    {
      label: "Properties",
      action: function(){
        alert( navigator.userAgent );
      }
    }
  ];

  /* Send it to parent scope, which is controlling ng-contextual-menu */
  $scope.$parent.options = $scope.options;
}]);
