
var m = new HashMap<String, String>(){"FL" ->"Tallahassee", "IL" -> "Springfield"}
m.put("TX", "Austin")


//m.retainWhereKeys(\x -> x == "TX")


var n = m.mapValues(\y -> y.toUpperCase())

print(n)