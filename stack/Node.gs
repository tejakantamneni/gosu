package stack

class Node<T> {
  var _value:T as Value
  var _next:Node<T> as Next
  
  construct(_val: T){
    this._value = _val
    this._next = null
  }
}