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
    console.log(countSides())
  }
}

class Square extends Polygon {

}