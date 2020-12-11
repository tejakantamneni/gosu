
var p1 = new Pair<Double, String>(1.1, "apple")
var p2 = new Pair<Double, String>(2.1, "pear") 

var same = CompareUtils.compare<Double, String>(p1, p2)

print(same)
