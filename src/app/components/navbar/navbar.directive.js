(function() {
  'use strict';

  angular
    .module('money2')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($rootScope, $cookies, $location) {
      var vm = this;

      vm.user = $rootScope.user

      vm.logout = function() {
        $rootScope.user = false
        $cookies.remove('user')
        $location.path("/login")
      }

      vm.toggleNav = function() {
        vm.isCollapsed = !vm.isCollapsed
      }

      vm.isCollapsed = true;

    }
  }

})();
