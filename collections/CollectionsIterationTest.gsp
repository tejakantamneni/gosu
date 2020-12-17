

var p = new Person("Test", 15)
var p1 = new Person("Test1", 25)
var p2 = new Person("Test2", 35)
var p3 = new Person("Test3", 45)
var p4 = new Person("Test4", 55)

var coll: Collection<Person> = {p, p1, p2, p3, p4}
var coll1: Collection<Person> = {p, p1, p2, p3, p4}

var coll2 = {coll, coll1}
print(coll2)
var result = coll2.flatMap(\x -> x.toList())

print(result)

var ints = {1,2,3,4,5}

print(ints.fold(\x, y -> x * y))


/*

function allMatch1<E>(e: Collection<E>, bl(e: E): boolean): boolean{
  var result = true
  for( y in e){
    if(!bl(y)){
      result = false
      break
    }
  }
  return result
}

var result1 = allMatch1<Person>(coll, \x -> x.Age > 15)
print(result1)


function hasMatch1<E>(e: Collection<E>, bl(e: E): boolean): boolean{
  for( y in e){
    if(bl(y)){
      return true
    }
  }
  return false
}

var result4 = hasMatch1<Person>(coll, \x -> x.Age > 15)
print(result4)
*/