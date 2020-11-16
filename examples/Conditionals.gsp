
var t = 35
//if else
if (t % 3 == 0){
  print("divisble by 3")
}else if(t % 5 == 0){
  print("divisble by 5")
}else{
  print("not divisible by 3 or 5")
}

//Ternary
var isDvisibleByFive = t % 4 == 0 ? "divisible by 5" : "not divisble by 5" 
print(isDvisibleByFive)