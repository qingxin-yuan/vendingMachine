import VendingMachine from "../lib/VendingMachine";
import Item from "../lib/Item";

const coke = new Item("coke", 3.0, 10);
const sourPatchKids = new Item("sour patch kids", 3.5, 10);
const vitaminWater = new Item("vitamin water", 3, 10);
const vendingMachine = new VendingMachine({
  coke,
  sourPatchKids,
  vitaminWater
});

describe("testing for VendingMachine class", () => {
  //   describe("input validation", () => {
  //     test("should throw error", () => {
  //       expect(() => {
  //         const item1 = new VendingMachine([], [], []);
  //       }).toThrow();
  //     });
  //   });

  describe("checking class initialization", () => {
    test("should return initInventory", () => {
      expect(vendingMachine.inventory.coke).toEqual({
        name: "coke",
        price: 3,
        quantity: 10
      });
    });
  });

  describe("check printing (console logging) current inventory", () => {
    test("should return objects with coke, sourPatchKids, vitaminWater", () => {
      expect(vendingMachine.printInverntory()).toEqual({
        coke: { name: "coke", price: 3, quantity: 10 },
        sourPatchKids: { name: "sour patch kids", price: 3.5, quantity: 10 },
        vitaminWater: { name: "vitamin water", price: 3, quantity: 10 }
      });
    });
  });

  describe("refilling inventory for all items", () => {
    test("should return 15", () => {
      vendingMachine.refillInventory(10);
      expect(vendingMachine.inventory.sourPatchKids.quantity).toBe(20);
    });
  });
  describe("buy items from the vending machine", () => {
    test("should throw error because payment is not enough", () => {
      expect(() => {
        vendingMachine.transaction("coke", 2, 5);
      }).toThrowError(/money/);
    });
    test("should return ", () => {
      vendingMachine.transaction("coke", 2, 10);
      expect(vendingMachine.CoinBank.statement.twoonie.quantity).toEqual(18);
    });
  });
});
