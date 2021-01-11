const { Triangle } = require('./exercism');

describe('Triangle', () => {
  describe('equilateral triangle', () => {
    test('all zero sides is not a triangle', () => {
      const triangle = new Triangle(0, 0, 0);
      expect(triangle.isEquilateral()).toBe(false);
    });

    test('all sides are equal', () => {

      const triangle = new Triangle(2, 2, 2);
      expect(triangle.isEquilateral()).toBe(true);
    });

    test('any side is unequal', () => {
      const triangle = new Triangle(2, 3, 2);
      expect(triangle.isEquilateral()).toBe(false);
    });

    test('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6);
      expect(triangle.isEquilateral()).toBe(false);
    });

    test('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.5, 0.5);
      expect(triangle.isEquilateral()).toBe(true);
    });
  });

  describe('isosceles triangle', () => {
    test('all zero sides is not a triangle', () => {
      const triangle = new Triangle(0, 0, 0);
      expect(triangle.isIsosceles()).toBe(false);
    });

    test('first triangle inequality violation', () => {
      const triangle = new Triangle(1, 1, 3);
      expect(triangle.isIsosceles()).toBe(false);
    });

    test('second triangle inequality violation', () => {
      const triangle = new Triangle(1, 3, 1);
      expect(triangle.isIsosceles()).toBe(false);
    });

    test('third triangle inequality violation', () => {
      const triangle = new Triangle(3, 1, 1);
      expect(triangle.isIsosceles()).toBe(false);
    });

    test('last two sides are equal', () => {
      const triangle = new Triangle(3, 4, 4);
      expect(triangle.isIsosceles()).toBe(true);
    });

    test('first two sides are equal', () => {
      const triangle = new Triangle(4, 4, 3);
      expect(triangle.isIsosceles()).toBe(true);
    });

    test('first and last sides are equal', () => {
      const triangle = new Triangle(4, 3, 4);
      expect(triangle.isIsosceles()).toBe(true);
    });

    test('equilateral triangles are also isosceles', () => {
      const triangle = new Triangle(4, 4, 4);
      expect(triangle.isIsosceles()).toBe(true);
    });

    test('no sides are equal', () => {
      const triangle = new Triangle(2, 3, 4);
      expect(triangle.isIsosceles()).toBe(false);
    });

    test('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.5);
      expect(triangle.isIsosceles()).toBe(true);
    });
  });

  describe('scalene triangle', () => {
    test('all zero sides is not a triangle', () => {
      const triangle = new Triangle(0, 0, 0);
      expect(triangle.isScalene()).toBe(false);
    });

    test('may not violate triangle inequality', () => {
      const triangle = new Triangle(7, 3, 2);
      expect(triangle.isScalene()).toBe(false);
    });

    test('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6);
      expect(triangle.isScalene()).toBe(true);
    });

    test('all sides are equal', () => {
      const triangle = new Triangle(4, 4, 4);
      expect(triangle.isScalene()).toBe(false);
    });

    test('two sides are equal', () => {
      const triangle = new Triangle(4, 4, 3);
      expect(triangle.isScalene()).toBe(false);
    });

    test('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.6);
      expect(triangle.isScalene()).toBe(true);
    });
  });

  describe('degenerate triangle', () => {
    test('all zero sides is not a triangle', () => {
      const triangle = new Triangle(0, 0, 0);
      expect(triangle.isDegenerate()).toBe(false);
    });

    test('is not a degenerate triangle - 1', () => {
      const triangle = new Triangle(1, 2, 4);
      expect(triangle.isDegenerate()).toBe(false);
    });

    test('is not a degenerate trianglei - 2', () => {
      const triangle = new Triangle(4, 1, 2);
      expect(triangle.isDegenerate()).toBe(false);
    });

    test('is not a degenerate trianglei - 3', () => {
      const triangle = new Triangle(2, 4, 1);
      expect(triangle.isDegenerate()).toBe(false);
    });

    test('is a degenerate triangle - 1', () => {
      const triangle = new Triangle(1, 2, 3);
      expect(triangle.isDegenerate()).toBe(true);
    });

    test('is a degenerate trianglei - 2', () => {
      const triangle = new Triangle(2, 3, 1);
      expect(triangle.isDegenerate()).toBe(true);
    });

    test('is a degenerate trianglei - 3', () => {
      const triangle = new Triangle(3, 1, 2);
      expect(triangle.isDegenerate()).toBe(true);
    });

    test('sides may be floats', () => {
      const triangle = new Triangle(1.0, 0.5, 0.5);
      expect(triangle.isDegenerate()).toBe(true);
    });
  });
});
