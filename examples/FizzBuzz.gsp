var r = (1..100)

for(i in r){
  if( i % 15 == 0){
    print("${i} - fizzbuzz")
  }else if(i % 3 == 0){
    print("${i} - fizz")
  }else if(i % 5 == 0){
    print("${i} - buzz")
  }
}