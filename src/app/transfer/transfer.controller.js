(function() {
  'use strict';

  angular
    .module('money2')
    .controller('TransferController', TransferController);

  /** @ngInject */
  function TransferController(toastr, moneyAccount, moneyTransfer, $rootScope) {
    var vm = this;

    function init() {
      vm.accounts = moneyAccount.query(function(){
        vm.transfer = {
          inputAmount: "",
          description: "",
          from_account: "1",
          to_account: "1",
          user: $rootScope.user.id
        }
      })
    }

    vm.submitForm = function() {
      moneyTransfer.save(vm.transfer, function(){
        toastr.success("Transfer Complete")
        init()
      }, function(){
        toastr.error("Error with Transfer")
      })
    }

    init()

  }

})();
