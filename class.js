class Calc {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    return this.a + this.b;
  }
  sub() {
    return this.a - this.b;
  }
  mul() {
    return this.a * this.b;
  }
  div() {
    return this.a / this.b;
  }
  remainder() {
    return this.a % this.b;
  }
  floorDiv() {
    const remainder = this.remainder();
    const divResult = this.div();

    if (remainder != 0) {
      return Math.round(divResult);
    }
    return divResult;

    // return remainder!=0? Math.round(divResult): divResult -------------------------------------another way of written if condition.
  }
}
export default Calc;
// export { Calc };
