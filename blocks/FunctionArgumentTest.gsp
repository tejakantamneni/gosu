
function addsTenToResultOfAnotherFunction( fn(x:int, y:int): int ) {
  print("adding...")
  var temp = fn(10, 20)
  print(temp)
}

addsTenToResultOfAnotherFunction( \x:int, y: int -> x * y )


