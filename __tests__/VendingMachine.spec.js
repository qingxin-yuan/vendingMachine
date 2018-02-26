import VendingMachine from "../lib/VendingMachine";
import Item from "../lib/Item";
import CoinBank from "../lib/CoinBank";

const coke = new Item("coke", 3.0, 10);
const sourPatchKids = new Item("sour patch kids", 3.5, 10);
const vitaminWater = new Item("vitamin water", 3, 10);
const Bank = new CoinBank({
  twoonie: 20,
  loonie: 20,
  quarter: 20,
  nickel: 20,
  dime: 20
});
const vendingMachine = new VendingMachine(Bank, {
  coke,
  sourPatchKids,
  vitaminWater
});

describe("testing for VendingMachine class", () => {
  // initialization test
  describe("checking class initialization", () => {
    test("should return initInventory", () => {
      expect(vendingMachine.inventory.coke).toEqual({
        name: "coke",
        price: 3,
        quantity: 10
      });
    });
  });

  // test for method printInventory
  describe("check printing (console logging) current inventory", () => {
    test("should return objects with coke, sourPatchKids, vitaminWater", () => {
      expect(vendingMachine.printInverntory()).toEqual({
        coke: { name: "coke", price: 3, quantity: 10 },
        sourPatchKids: { name: "sour patch kids", price: 3.5, quantity: 10 },
        vitaminWater: { name: "vitamin water", price: 3, quantity: 10 }
      });
    });
  });

  // refill inventory to 20 each
  describe("refilling inventory for all items", () => {
    test("should return 20", () => {
      vendingMachine.refillInventory(10);
      // console.log(typeof 10);
      expect(vendingMachine.inventory.sourPatchKids.quantity).toBe(20);
    });
  });

  // transaction test
  describe("buy items from the vending machine", () => {
    test("should throw error because payment is not enough", () => {
      expect(() => {
        vendingMachine.transaction("coke", 2, 5);
      }).toThrowError(/money/);
    });
    test("should return 18 (2 twoonies are returned for change)", () => {
      vendingMachine.transaction("coke", 2, 10);
      expect(vendingMachine.CoinBank.statement.twoonie.quantity).toEqual(18);
    });
    // check coke quantity in stock, after 2 transactions of 2 cokes sold,
    // should be 16 cokes in stock
    test("should return 16", () => {
      vendingMachine.transaction("coke", 2, 10);
      expect(vendingMachine.inventory.coke.quantity).toEqual(16);
    });
  });
});
