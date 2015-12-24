(function() {
  'use strict';

  angular
    .module('money2')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope, $cookies, $location, moneyLogin, toastr) {
    var vm = this;
    vm.formData = {};
    vm.formData.pin = "";

    vm.submitForm = function() {
      moneyLogin.save(vm.formData, function(user){
        $rootScope.user = user[0]
        $cookies.putObject('user', user[0])
        $location.path("/")
      }, function(){
        toastr.error("Unable to Log In")
      })

    }

  }

})();
