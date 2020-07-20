class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  
  get countSides() {
    return this.sides
  } 
}

class Triangle extends Polygon {

}

class Square extends Polygon {

}