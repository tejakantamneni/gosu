
var names = new ArrayList<String>(){"John", "James", "Linda", "Taylor", "Anthony", "Jack"}

//Traversing
names.forEach(\e -> print(e))
print("-------------------")

//The old fashioned way
for (i in names){
  print(i)
}
print("-------------------")




//Stream - Filter
names.stream()
      .filter( \e -> e.charAt(0) == 'J')
      .sorted()
      .forEach( \e -> print(e))
