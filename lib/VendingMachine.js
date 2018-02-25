// import Item from "./Item";
import CoinBank from "./CoinBank";

export default class VendingMachine {
  constructor(initInventory) {
    this.CoinBank = new CoinBank({
      twoonie: 20,
      loonie: 20,
      quarter: 20,
      nickel: 20,
      dime: 20
    });
    this.inventory = initInventory;
  }
  printInverntory() {
    return this.inventory;
  }
  refillInventory(quantity) {
    Object.values(this.inventory).forEach(item => {
      // console.log(item);
      item.updateQuantity(quantity);
    });
  }
  transaction(itemName, quantity, payment) {
    const total = quantity * this.inventory[itemName].price;
    if (!this.inventory[itemName]) {
      throw new Error("invalid input");
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
