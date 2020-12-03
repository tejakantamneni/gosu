
var a = new Animal()
a.move()

var c = new Cat()
c.move()
c.meow()

print(typeof c)
print(c typeis Animal)
print(c typeis Mammal)
//print(c typeis Reptile)

var ca:Animal = (Animal) c
//ca.meow()
ca.move()