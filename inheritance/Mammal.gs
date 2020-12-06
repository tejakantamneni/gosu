package inheritance

class Mammal  extends Animal{
  var _gestationDays: int as GestationPeriod

  construct(name: String, legs: int, veg: boolean, _ges: int){
    super(name, legs, veg)
    print("constructor in Mammal called")
   print( _something )
    this._gestationDays = _ges
  }
  
}