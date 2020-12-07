
var captured = 10

var addTen = \x:int -> { return captured + x}

print(addTen(23))

captured = 30

print(addTen(23))



