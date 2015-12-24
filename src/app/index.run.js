(function() {
  'use strict';

  angular
    .module('money2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $location, $cookies) {

    if (typeof $cookies.get('user') != 'undefined') {
      $rootScope.user = $cookies.getObject('user')
    }

    // Redirect when logged out
   var redirectCalback = $rootScope.$on( "$routeChangeStart", function() {
      if (!$rootScope.user) {
        $location.path("/login");
      }
    })

   $rootScope.$on('$destroy', redirectCalback)

  }

})();
