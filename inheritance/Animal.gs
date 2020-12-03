package inheritance

class Animal {
  var _name: String as Name
  var _numberOfLegs: int as NumberOfLegs
  var _vegetarian: boolean as Vegetarian
  
  construct(){}
  
  construct(name: String, noOfLegs: int, veg: boolean){
   this._name = name
   this._numberOfLegs = noOfLegs 
   this._vegetarian = veg
  }
  
  function move(){
    print("I am moving...")
  }
}