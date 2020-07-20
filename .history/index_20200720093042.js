class Polygon {
  constructor(sides) {
    this.sides = sides
    console.log(sides)
  }
  
  get countSides() {
    return this.sides
  } 
}

class Triangle extends Polygon {

}

class Square extends Polygon {

}