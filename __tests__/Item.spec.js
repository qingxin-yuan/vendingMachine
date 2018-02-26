import Item from "../lib/Item";

describe("testing for Item class", () => {
  describe("input validation", () => {
    test("should throw error", () => {
      expect(() => {
        const itemIgnored = new Item([], [], []);
      }).toThrow();
    });
  });

  describe("checking class property", () => {
    test("should return coke", () => {
      const item1 = new Item("coke", 3.0, 10);
      expect(item1.name).toEqual("coke");
    });
  });
  describe("update coke quantity to 7", () => {
    test("should return 7", () => {
      const item1 = new Item("coke", 3.0, 10);
      item1.updateQuantity(-3);
      expect(item1.quantity).toEqual(7);
    });
  });
});
