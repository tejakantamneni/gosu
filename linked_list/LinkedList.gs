package linked_list

class LinkedList {
  var _begin: Node = null
  
  function insert(v: String, pos: int = 0){
    var n = new Node(v)
    if(_begin == null){
      if (pos == 0){
        _begin = n
      }else{
        throw new RuntimeException("Can't insert at specified position.")
      }
    }else{
      var counter = 0
      var _index =  _begin
      while(pos > counter){
        _index = _index.Next
        counter ++
      }
      n.Next = _index.Next
      _index.Next = n
    }
  }
  
  function remove(pos: int = 0): String{
    return null
  }
  
  function size():int {
    return -1
  }
  
  function display(){
    var _index = _begin
    while(_index != null ){
      print(_index.Value)
      _index = _index.Next
    }
  }
}