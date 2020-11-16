
print("Performing ! - " + (! op1()))
print("Performing ! - " + (not op1()))
print("-----------------------")
print("Performing & - " + (op1() & op2()))
print("Performing & - " + (op1() and op2()))
print("-----------------------")
print("Performing && - " + (op1() && op2()))
print("-----------------------")
print("Performing && - " + (op2() && op1()))
print("-----------------------")
print("Performing | - " + (op1() | op2()))
print("Performing | - " + (op1() or op2()))
print("-----------------------")
print("Performing || - " + (op1() || op2()))
print("-----------------------")

function op1(): boolean {
  print("executing op1 - true")
  return true
}

function op2(): boolean {
  print("executing op2 - false")
  return false
}


function op3(): boolean {
  print("executing op3 - true")
  return true
}


function op4(): boolean {
  print("executing op4 - false")
  return false
}