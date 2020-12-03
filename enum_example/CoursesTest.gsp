
var e =  Courses.Gosu

switch(e){
  case Courses.Agile:
    print("Agile")
    break
  case Courses.Gosu:
    print("Gosu")
    break
  default:
    print("Other")
}

print("--------")

for(ele in Courses.values()){
  print(ele)
}