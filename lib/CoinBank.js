export default class CoinBank {
  constructor(initialQuantities) {
    if (
      // typeof name !== "string" ||
      // typeof price !== "number" ||
      typeof initialQuantities !== "object"
    ) {
      throw new Error("invalid input");
    }

    this.statement = {
      twoonie: {
        value: 2,
        quantity: initialQuantities.twoonie,
      },
      loonie: {
        value: 1,
        quantity: initialQuantities.loonie,
      },
      nickel: {
        value: 0.25,
        quantity: initialQuantities.nickel,
      },
      dime: {
        value: 0.1,
        quantity: initialQuantities.dime,
      },
    };
  }

  resupplyChangeForAll(number) {
    Object.values(this.statement).forEach((type) => {
      type.quantity += number;
    });
  }
}
