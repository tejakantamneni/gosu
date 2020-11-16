function search(inp: int[], e: int): int{
  for(v in inp index i){
    if(v == e){
      return i
    }
  }
  return -1
}

var elems = new int[]{10, -30, 2, 56, -9, 23, -10}


print(search(elems, 277))