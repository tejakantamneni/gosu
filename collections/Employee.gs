package collections

class Employee implements Comparable<Employee>{
  var _name:String as Name
  var _department: String as Department
  var _title: String as Title
  
  construct(n: String, d: String, t: String){
    this._name = n
    this._department = d
    this._title = t
  }
  
  function isManager(): boolean {
    if(Department == "IT"  and Title == "Manager"){
      throw new ITEmployeeException("IT Employee can't be a manager")
    }
    return Title == "Manager"
  }
  
  override function compareTo(o: Employee): int{
    if(Name < o.Name){
      return -1
    }else if (Name > o.Name){
      return 1
    }else{
      return 0
    }
  }
  
  override function toString(): String{
    return "${Name} - ${Department} - ${Title}"
  }
}