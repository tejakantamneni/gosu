function fibonacci(n: int): int{
  var mem = new int[n+1]
  mem[0] = 1
  mem[1] = 1
  var loop = 2
  while (loop <= n){
    mem[loop] = mem[loop -1] + mem[loop-2]
    loop ++
  }
  return mem[n]
}




print(fibonacci(150))