package linked_list

class Node {
  var _value: String as Value
  var _next: Node as Next
  
  construct(v: String){
    this._value = v
    this._next = null
  }
}