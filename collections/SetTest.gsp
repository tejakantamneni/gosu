
uses java.util.stream.Collectors


var names = new HashSet<String>(){"John", "James", "Linda", "Taylor", "Anthony", "Jack", "John"}

print(names)

var nameList = new ArrayList<String>(){"John", "James", "Linda", "Taylor", "Anthony", "Jack", "John", "Linda"}

var withoutDups = nameList.stream().collect(Collectors.toSet())

print(withoutDups)