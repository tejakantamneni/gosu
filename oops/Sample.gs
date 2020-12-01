package oops

class Sample {
  
  var _name: String as Name
  
  //no args construct
  construct(){
    this("No Name")
    print("construct invoked")
  }
  
  construct(name: String){
    print("dummy logic")
    this._name = name
  }
  
}