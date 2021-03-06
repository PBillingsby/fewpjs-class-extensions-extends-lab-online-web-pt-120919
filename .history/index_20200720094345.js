class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  
  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((accum, num) => accum + num)
  }
}

class Triangle extends Polygon {
  get isValid() {
    conditionOne = (this.sides[1] + this.sides[2]) > this.sides[0]
    conditionOne && this.countSides === 3
  }
}

class Square extends Polygon {

}