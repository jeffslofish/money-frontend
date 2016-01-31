(function() {
  'use strict';

  angular
    .module('money2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, toastr, moneyAccount, moneyTransaction) {
    var vm = this;

    vm.selectedAccount = {}

    function init() {
      vm.accounts = moneyAccount.query(function(){
        vm.transaction = {
          user: $rootScope.user.id,
          inputAmount: "",
          description: "",
          account: "0"
        }
      })
    }

    vm.submitTransaction = function(transactionData) {
      moneyTransaction.save(transactionData, function(){
        toastr.success("Transaction Submitted")
        init()
      }, function(){
        toastr.error("Error With Transaction")
      })
    }

    vm.selectAccount = function(account) {
      vm.selectedAccount = moneyAccount.get({account_id:account})
    }

    vm.pageFilter = function() {
      if (vm.currentPage == 1) {
        return 1
      } else {
        return ((vm.currentPage - 1) * 10)
      }
    }

    vm.accountTotal = function() {
      var accountTotal = 0
      angular.forEach(vm.accounts, function(value){
        if (value.total) {
          accountTotal = parseFloat(accountTotal) + parseFloat(value.total)
        }
      })
      return accountTotal
    }

    init()

  }

})();
