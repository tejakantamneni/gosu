package inheritance

class Reptile extends Animal{
  var _numberOfEggs: int as NumberOfEggs
  
  construct(name: String, legs: int, veg: boolean, eggs: int){
    super(name, legs, veg)
    print("constructor in Reptile called")
    this._numberOfEggs = eggs
  }
  
}