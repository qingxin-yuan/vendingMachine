export default class VendingMachine {
  constructor(initBank, initInventory) {
    if (typeof initInventory !== "object" || typeof initBank !== "object") {
      throw new Error("invalid input");
    }
    this.CoinBank = initBank;
    this.inventory = initInventory;
  }
  printInverntory() {
    return this.inventory;
  }
  refillInventory(quantity) {
    // console.log(typeof quantity);
    if (typeof quantity !== "number") {
      throw new Error("invalid input");
    }
    Object.values(this.inventory).forEach(item => {
      // console.log(item);
      item.updateQuantity(quantity);
    });
  }
  transaction(itemName, quantity, payment) {
    const total = quantity * this.inventory[itemName].price;
    if (!this.inventory[itemName]) {
      throw new Error("there's no such item..");
    } else if (this.inventory[itemName].quantity < quantity) {
      throw new Error("please select a smaller quantity");
    } else if (payment < total) {
      throw new Error("please insert money...");
    } else {
      this.inventory[itemName].updateQuantity(-quantity);
      this.CoinBank.getChange(payment, total);
    }
  }
}
