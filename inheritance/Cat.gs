package inheritance

class Cat extends Mammal{
  var _skinColor: String as SkinColor
  
  function meow(){
    print("meow....")
  }
  
  function move(){
    print("I am walking...")
  }
}