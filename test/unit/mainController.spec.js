describe('MainController', function() {
  beforeEach(module('appName'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('MainController', {
        $scope: scope,
    });
  }));
});