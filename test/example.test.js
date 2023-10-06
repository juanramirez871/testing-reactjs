// calculadora.test.js
import { sumar, restar, multiplicar, dividir } from "./calculadora.js";

describe("Operaciones matemáticas", () => {
  test("sumar 1 + 2 debe ser igual a 3", () => {
    expect(sumar(1, 2)).toBe(3);
  });

  test("restar 5 - 3 debe ser igual a 2", () => {
    expect(restar(5, 3)).toBe(2);
  });

  describe("Multiplicación", () => {
    test("multiplicar 2 * 4 debe ser igual a 8", () => {
      expect(multiplicar(2, 4)).toBe(8);
    });

    test("multiplicar 0 * 7 debe ser igual a 0", () => {
      expect(multiplicar(0, 7)).toBe(0);
    });
  });

  describe("División", () => {
    test("dividir 10 / 2 debe ser igual a 5", () => {
      expect(dividir(10, 2)).toBe(5);
    });

    test("dividir 7 / 0 debe lanzar un error", () => {
      expect(() => dividir(7, 0)).toThrow("No se puede dividir por cero");
    });
  });
});
