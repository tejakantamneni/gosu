package inheritance

class Cat extends Mammal{
  var _skinColor: String as SkinColor
  
  construct(name: String, legs: int, veg: boolean, _ges: int, skColor: String){
    super(name, legs, veg, _ges)
    print("constructor in Cat called")
    print( _something )
    this._skinColor = skColor
  }
  
  function meow(){
    print("meow....")
  }
  
  
  override function move(){
    super.move()
    print("${Name} am walking...")
  }
}