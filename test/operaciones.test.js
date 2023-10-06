// calculadora-pruebas.js
import operaciones from "./operaciones.js";

describe("Pruebas de cálculos matemáticos", () => {

  test("Restar 5 - 3 debe ser igual a 2", () => {
    expect(Calculadora.restar(5, 3)).toBe(2);
  });

  test("Sumar 1 + 2 debe dar 3", () => {
    expect(Calculadora.sumar(1, 2)).toBe(3);
  });

  describe("Operación de División", () => {

    test("Dividir 10 entre 2 debe ser igual a 5", () => {
      expect(Calculadora.dividir(10, 2)).toBe(5);
    });

    test("Dividir 7 entre 0 debe lanzar un error", () => {
      expect(() => Calculadora.dividir(7, 0)).toThrow("No se puede dividir por cero");
    });
  });

  describe("Operación de Multiplicación", () => {

    test("Multiplicar 2 por 4 debe ser igual a 8", () => {
      expect(Calculadora.multiplicar(2, 4)).toBe(8);
    });

    test("Multiplicar 0 por 7 debe ser igual a 0", () => {
      expect(Calculadora.multiplicar(0, 7)).toBe(0);
    });
  });
});
