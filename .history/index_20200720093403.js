class Polygon {
  constructor(sides) {
    this.sides = sides
    console.log(this.sides)
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
    return countSides === 3
  }
}

class Square extends Polygon {

}