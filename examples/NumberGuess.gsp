var guess = new Random().nextInt(100) + 1

var reader = new Scanner(System.in)
var counter = 0;
var gussed = false

do{
  print("guess the number: ")
  var userGuess = reader.nextInt()
  counter ++
  gussed = userGuess == guess
  if(userGuess > guess){
    print("too high")
  }else if(userGuess < guess){
    print("too small")
  }
}while(!gussed)

print("Success, you guessed it in ${counter} tries")