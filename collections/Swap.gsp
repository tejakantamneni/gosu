
//[1,2,3,4], 1, 2
//[1,3,2,4]

function swap<E>(coll: List<E>, i: int, j: int){
  var iElement = coll.get(i)
  var jElement = coll.get(j)
  coll.set(i, jElement)
  coll.set(j, iElement)
}

var l = {1,2,3,4}
swap<Integer>(l, 1, 2)
print(l)