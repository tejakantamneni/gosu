
function blockArgTest( myArg(p:String): String){
  print("before calling your arg...")
  var result = myArg("Test")
  print(result)
  print("after calling your arg...")
}

blockArgTest(\p ->{return p.toUpperCase()})