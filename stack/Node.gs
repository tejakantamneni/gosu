package stack

class Node {
  var _value:String as Value
  var _next:Node as Next
  
  construct(_val: String){
    this._value = _val
    this._next = null
  }
}