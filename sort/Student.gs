package sort

class Student implements Comparable<Student>{

  var _id:int as Id
  var _name: String as Name

  construct(id: int, name: String){
    this._id = id
    this._name = name
  }

  override function toString(): String {
    return "${this.Id} - ${this._name}"
  }

  override function compareTo(s: Student): int {
    if (this._id == s.Id){
      return 0
    }else if(this._id > s.Id){
      return 1
    }
    return -1
  }

}