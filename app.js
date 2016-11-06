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
  shoppingList.moveToBought = function (index) {
    console.log("topindex: " + index);
    ShoppingListCheckOffService.moveToBought(index);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;
  var tobuy = ['cookies', 'chocolate', 'candy', 'cake', 'doughnuts', 'pie'];
  var bought = [];

  service.getItems = function () {
    return tobuy;
  }

  service.getBoughtItems = function () {
    return bought;
  }

  service.moveToBought = function (index) {
    console.log("index: ", index);
    bought.push(tobuy[index]);
    tobuy.splice(index, 1);
  }
}

})();
