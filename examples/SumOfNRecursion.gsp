
function sum(n: int): int {
  print("calling sum with input : ${n}")
  if (n  == 1 ) return 1
  return n + sum( n - 1 )
}

print(sum(5))