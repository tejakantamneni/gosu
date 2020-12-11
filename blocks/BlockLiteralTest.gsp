//var i: int
//
//var bl(p: String): String
//
//var bl1: block(p:String): String
//
//i = 10 + 3
//
//bl = \k -> k.toUpperCase()
//
//bl1 = \p -> p.toUpperCase()
//
//print(bl("teja"))
//print(bl1("teja"))

function test(p:int, f(x: int): int, f1(x:int): int ): int{
  return f(p) + f1(p) + 10
}


var result = test( 3, \x -> x * x * x, \y -> y * 3)
print(result)

