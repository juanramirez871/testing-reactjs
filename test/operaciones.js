export default class Calculadora {

  static subtract(a, b) {
    return a - b;
  }

  static add(a, b) {
    return a + b;
  }

  static split(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }

  static multiply(a, b) {
    return a * b;
  }

}
