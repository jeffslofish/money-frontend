(function() {
  'use strict';

  angular
    .module('money2')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/income', {
        templateUrl: 'app/income/income.html',
        controller: 'IncomeController',
        controllerAs: 'income'
      })
      .when('/transfer', {
        templateUrl: 'app/transfer/transfer.html',
        controller: 'TransferController',
        controllerAs: 'transfer'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
