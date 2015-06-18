var app = angular.module('DiySpace',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/',{
    controller: 'MainController',
  });
});

app.controller('MainController', ['$http', function($http) {

  var self = this;

  $http.get('http://diyspaceforlondon.org/wp-json/posts').success(function(data) {
    self.blog_data = data;
  });

}]);
