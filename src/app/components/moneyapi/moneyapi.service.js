(function() {
  'use strict';

  angular
      .module('money2')
      .factory('moneyAccount', function($resource, $rootScope) {
        return $resource('http://192.168.1.113/api/v1/account/:account_id', {}, 
          { 'get':    {method:'GET', headers: {'Auth-Token': $rootScope.user.pin}},
            'save':   {method:'POST', headers: {'Auth-Token': $rootScope.user.pin}},
            'query':  {method:'GET', headers: {'Auth-Token': $rootScope.user.pin}, isArray: true }
          })
      })
      .factory('moneyTransaction', function($resource, $rootScope) {
        return $resource('http://192.168.1.113/api/v1/transactions', {}, 
          { 'get':    {method:'GET', headers: {'Auth-Token': $rootScope.user.pin}},
            'save':   {method:'POST', headers: {'Auth-Token': $rootScope.user.pin}},
            'query':  {method:'GET', headers: {'Auth-Token': $rootScope.user.pin}, isArray: true }
          })
      })
      .factory('moneyDeposit', function($resource, $rootScope) {
        return $resource('http://192.168.1.113/api/v1/deposit', {}, 
          { 'get':    {method:'GET', headers: {'Auth-Token': $rootScope.user.pin}},
            'save':   {method:'POST', headers: {'Auth-Token': $rootScope.user.pin}},
            'query':  {method:'GET', headers: {'Auth-Token': $rootScope.user.pin}, isArray: true }
          })
      })
      .factory('moneyTransfer', function($resource, $rootScope) {
        return $resource('http://192.168.1.113/api/v1/transfer', {}, 
          { 'get':    {method:'GET', headers: {'Auth-Token': $rootScope.user.pin}},
            'save':   {method:'POST', headers: {'Auth-Token': $rootScope.user.pin}},
            'query':  {method:'GET', headers: {'Auth-Token': $rootScope.user.pin}, isArray: true }
          })
      })
      .factory('moneyLogin', function($resource) {
        return $resource('http://192.168.1.113/api/v1/login',{},
          { 
            'save': {method:'POST', isArray:true}});
          })
})();
