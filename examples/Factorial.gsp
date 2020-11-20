

function factorial(n: int): int{
  //print("calling with input ${n}")
  if (n == 1) return 1
  return n * factorial(n-1)
}

// f(5) -> 5 . 4 . 3 . 2 . 1
function factorialv2(n:int) : int {
  var product = 1
  while (n >= 1){
    product = product * n
    print(product)
    n = n - 1
  }
  return product
}

//print(factorial(5))
print(factorialv2(5))