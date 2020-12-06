package inheritance

class Animal {
  var _name: String as Name
  var _numberOfLegs: int as NumberOfLegs
  var _vegetarian: boolean as Vegetarian
  
  protected var _something:String as SomeThing
  
  //construct(){}
  
  construct(final name: String, final noOfLegs: int, final veg: boolean){
   print("constructor in Animal called")
   this._name = name
   this._numberOfLegs = noOfLegs 
   this._vegetarian = veg
  }
  
  function move(){
    print("${_name} is moving...")
  }
}