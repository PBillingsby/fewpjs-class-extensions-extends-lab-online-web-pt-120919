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
    console.log(this.countSides === 3)
  }
}

class Square extends Polygon {

}