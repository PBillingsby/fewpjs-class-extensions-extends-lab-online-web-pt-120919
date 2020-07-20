class Polygon {
  constructor(sides) {
    this.sides = sides
    console.log(this.sides)
  }
  
  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.reduce((accum, num) => accum + num)
  }
}

class Triangle extends Polygon {

}

class Square extends Polygon {

}