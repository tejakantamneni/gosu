package collections

class Employee {
  var _name:String as Name
  var _department: String as Department
  var _title: String as Title
  
  construct(n: String, d: String, t: String){
    this._name = n
    this._department = d
    this._title = t
  }
  
  override function toString(): String{
    return "${Name} - ${Department} - ${Title}"
  }
}