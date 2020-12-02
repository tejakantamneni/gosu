package stack

class Stack {
  
   var _size:int as readonly Size
   var _top:Node

  construct(){
    _size = 0
  }
  
  function push(_v: String){
    //creating a new node object
    var n = new Node(_v)
    //setting the next to current top
    n.Next = _top
    //make the top point to new element that we just pushed
    _top = n
    _size ++
  }
  
  function pop(): String{
    //Check empty stack
    if(_top == null){
      return null
    }
    //take top element and store it in n
    var n = _top.Value
    //change the top to the element that is pointing by current top
    _top = _top.Next
    
    _size --
    
    //return the value
    return n
  }
  
  function peek(): String{
    //Check empty stack
    if(_top == null){
      return null
    }
    //look at the top element and return it
    return _top.Value
  }
  
}