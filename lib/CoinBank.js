export default class CoinBank {
  constructor({ twoonie, loonie, quarter, nickel, dime }) {
    // TODO: check for array or object input type??
    if ((twoonie || loonie || nickel || dime || quarter) === undefined) {
      throw new Error("invalid input");
    }

    this.statement = {
      twoonie: {
        value: 2,
        quantity: twoonie
      },
      loonie: {
        value: 1,
        quantity: loonie
      },
      quarter: {
        value: 0.25,
        quantity: quarter
      },
      dime: {
        value: 0.1,
        quantity: dime
      },
      nickel: {
        value: 0.05,
        quantity: nickel
      }
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

  getChange(payment, total) {
    const changeAmount = payment - total;
    let remainingChange = changeAmount;
    let result = {};

    Object.entries(this.statement).forEach(([key, value]) => {
      const number = Math.floor(remainingChange / value.value);
      remainingChange -= number * value.value;
      if (number) {
        result = Object.assign(result, { [key]: number });
      }
    });

    // const result = {
    //   ...(numTwoonie ? { twoonie: numTwoonie } : {}),
    //   ...(numLoonie ? { loonie: numLoonie } : {}),
    //   ...(numQuarter ? { quarter: numQuarter } : {}),
    //   ...(numDime ? { dime: numDime } : {}),
    //   ...(numNickel ? { nickel: numNickel } : {})
    // };
    console.log(result);
    return result;
  }
}
