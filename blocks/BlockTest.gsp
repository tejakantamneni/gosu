
var temp = 10

var f = \x:String -> { return (temp + 10) }

print(typeof f)

temp = 30

var k = f("t")

print(k)