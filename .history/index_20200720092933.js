class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  
  get countSides(sides) {
    this._sides = sides
  } 
}

class Triangle extends Polygon {

}

class Square extends Polygon {

}