

function sayHello(  name: String = "World" ){
  var begin = "Hello"
  print("${begin}, ${name}!!")
}


function sayGoodbye(  name: String = "World" ){
  var begin = "Bye"
  print("${begin}, ${name}!!")
}


sayHello()
sayHello("Julia")