

function isEven( input: int): String {
  var result: boolean = input % 2 == 0
  if ( result ){
    return "true"
  } else{
    return "false"
  }
 // return input % 2 == 0
}

if( isEven(4) == "true"){
  
}

print(isEven(4))
print(isEven(41))
print(isEven(414))
print(isEven(0))