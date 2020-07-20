class Polygon {
  constructor(sides) {
    this.sides = sides
    console.log(this.sides)
  }
  
  get countSides() {
    return this.sides.length
  } 
}

class Triangle extends Polygon {

}

class Square extends Polygon {

}