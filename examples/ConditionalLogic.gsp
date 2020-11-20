
var i = 3

if( i == 2 ){
  print("two")
}else if(i == 3){
  print("three")
}else {
  print("not two or three")
}

switch(i){
  case 1:
    print("one")
    break
  case 2:
    print("two")
    break
  default:
    print("something else")
    break
}

var k = i == 2 ? "two" : ( i == 3 ? "three" : "something")

print(k)

