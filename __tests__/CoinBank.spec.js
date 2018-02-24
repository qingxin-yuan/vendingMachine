import CoinBank from "../lib/CoinBank";

describe("testing for CoinBank class", () => {
  describe("input validation", () => {
    test("should throw error", () => {
      expect(() => {
        const CoinBank1 = new CoinBank();
      }).toThrow();
    });
  });
  describe("accessing properties after initialization", () => {
    test("should return 10", () => {
      const CoinBank1 = new CoinBank({
        twoonie: 10,
        loonie: 10,
        nickel: 10,
        dime: 10
      });
      // console.log(CoinBank1.statement.twoonie.quantity);
      expect(CoinBank1.statement.twoonie.quantity).toEqual(10);
    });
  });
  describe("test resupplying changes for all types of coins", () => {
    test("should return 15", () => {
      const CoinBank1 = new CoinBank({
        twoonie: 10,
        loonie: 10,
        nickel: 10,
        dime: 10
      });
      CoinBank1.resupplyChangeForAll(5);
      expect(CoinBank1.statement.twoonie.quantity).toBe(15);
    });
  });
  describe("test resupplying changes for a specific type of coin", () => {
    test("should return 15", () => {
      const CoinBank1 = new CoinBank({
        twoonie: 10,
        loonie: 10,
        nickel: 10,
        dime: 10
      });
      CoinBank1.resupplyChangeForOne({ type: "twoonie", quantity: 5 });
      expect(CoinBank1.statement.twoonie.quantity).toBe(15);
    });
  });
});
