(function() {
  'use strict';

  angular
    .module('money2')
    .controller('IncomeController', IncomeController);

  /** @ngInject */
  function IncomeController($rootScope, toastr, moneyAccount, moneyDeposit) {
    var vm = this;

    function init() {
      vm.totalIncome = ""
      vm.accounts = moneyAccount.query()
    }

    vm.remaining = function(){
      var formTotal = 0
      angular.forEach(vm.accounts, function(value){
        if (value.income){
          formTotal = parseFloat(formTotal) + parseFloat(value.income)
        }
      })
      return (vm.totalIncome - formTotal).toFixed(2)
    }

    // Why must you CONCAT, Javacript???
    vm.addTotal = function (balance, income) {income
      if (balance && income) {
        return parseFloat(balance) + parseFloat(income)
      } else {
        return balance
      }
    }

    vm.submitIncome = function() {
      var incomeArray = {}

      angular.forEach(vm.accounts, function(value){
        if (value.income){
          incomeArray[value.id] = value.income
        }
      })

      var incomeSubmit = {
        user: $rootScope.user.id,
        income: incomeArray
      }

      moneyDeposit.save(incomeSubmit, function(){
        init()
        vm.form.$setPristine()
        toastr.success("Income Saved")
      }, function(){
        toastr.error("Error Saving Income")
      })

    }

    init()

  }

})();
