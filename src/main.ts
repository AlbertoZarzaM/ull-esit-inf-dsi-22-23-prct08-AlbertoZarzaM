type ColorType = 'red' | 'yellow' | 'blue' | 'green';

abstract class TwoDimensionalFigureCreator {
  public abstract factoryMethod(): TwoDimensionalFigure;

  public logic(): string {
    const twoDimensionalFigure = this.factoryMethod();
    return `I am a ${twoDimensionalFigure.getName()}, ` +
           `I am ${twoDimensionalFigure.getColor()} and ` +
           `my area is equal to ${twoDimensionalFigure.getArea()}`;
  }
}

class RectangleCreator extends TwoDimensionalFigureCreator {
  constructor(private readonly name: string, private color: ColorType,
    private base: number, private height: number) {
    super();
  }
  public factoryMethod(): TwoDimensionalFigure {
    return new Rectangle(this.name, this.color, this.base, this.height);
  }
}

class CircleCreator extends TwoDimensionalFigureCreator {
  constructor(private readonly name: string, private color: ColorType,
    private radius: number) {
    super();
  }
  public factoryMethod(): TwoDimensionalFigure {
    return new Circle(this.name, this.color, this.radius);
  }
}

interface TwoDimensionalFigure {
  getArea(): number;
}

class Rectangle implements TwoDimensionalFigure {
  private readonly sides = 4;
  constructor(private readonly name: string, private color: ColorType,
    private base: number = 1, private height: number = 1) {
  }
  getSides() {
    return this.sides;
  }
  getName() {
    return this.name;
  }
  getColor() {
    return this.color;
  }
  getArea() {
    return this.base * this.height;
  }
}

class Circle implements TwoDimensionalFigure {
  constructor(private readonly name: string, private color: ColorType,
    private radius: number = 1) {
  }
  getName() {
    return this.name;
  }
  getColor() {
    return this.color;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

function clientCode(twoDimensionalFigureCreator: TwoDimensionalFigureCreator) {
  console.log(twoDimensionalFigureCreator.logic());
}
clientCode(new RectangleCreator('RedRectangle', 'red', 10, 5));
clientCode(new CircleCreator('BlueCircle', 'blue', 7));