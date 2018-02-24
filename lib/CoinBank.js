export default class CoinBank {
  constructor({ twoonie, loonie, nickel, dime }) {
    // TODO: check for array or object input type??
    if (
      (twoonie || loonie || nickel || dime) === undefined
      
    ) {
      throw new Error("invalid input");
    }

    this.statement = {
      twoonie: {
        value: 2,
        quantity: twoonie,
      },
      loonie: {
        value: 1,
        quantity: loonie,
      },
      nickel: {
        value: 0.25,
        quantity: nickel,
      },
      dime: {
        value: 0.1,
        quantity: dime,
      },
    };
  }

  resupplyChangeForAll(number) {
    Object.values(this.statement).forEach(type => {
      type.quantity += number;
    });
  }

  resupplyChangeForOne({ type, quantity }) {
    this.statement[type].quantity += quantity;
  }
}
