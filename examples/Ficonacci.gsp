
function fibonacci(n: int): int{
  //print("calling with ${n}")
   if (n < 2) {
      return 1 
   } 
   return fibonacci(n - 1) + fibonacci(n-2)
}

print(fibonacci(150))