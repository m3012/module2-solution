(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var shoppingList = this;

  shoppingList.items = ShoppingListCheckOffService.getItems();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
}

function ShoppingListCheckOffService() {
  var service = this;
  var tobuy = ['cokies', 'chocolate', 'candy', 'cake', 'doughnuts', 'pie'];
  var bought = [];

  service.getItems = function () {
    return tobuy;
  }

}

})();
