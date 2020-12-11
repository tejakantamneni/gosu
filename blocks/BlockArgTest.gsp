
function callArgument( t: String, userDefinedFunction(x: String): String ){
  print("before calling...")
  var result = userDefinedFunction(t)
  print(result)
  print("after calling...")
}

callArgument( "test", \x -> x.toLowerCase() )

callArgument( "rest", \x -> x.toUpperCase() )