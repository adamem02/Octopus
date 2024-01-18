// shapes.test.js
import { Circle, Square, Triangle } from "./shapes";

// Circle Shape
describe('Circle', () => {
  test('renders correctly', () => {
    const shape = new Circle();
    const color = 'blue';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
  });
});

// Square Shape
describe('Square', () => {
  test('renders correctly', () => {
    const shape = new Square();
    const color = 'green';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
  });
});

// Triangle Shape
describe('Triangle', () => {
  test('renders correctly', () => {
    const shape = new Triangle();
    const color = 'pink';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points="100,10 40,198 190,78" fill="${color}">`);
  });
});
