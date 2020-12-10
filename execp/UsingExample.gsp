uses java.io.*

var f = new File("./temp.txt")
var out:FileWriter = null
try{
  out = new FileWriter(f);
  out.write("test")
  print(f.AbsolutePath)
}finally{
  out.close()
}

var f1 = new File("./temp1.txt")
using(var out1 = new FileWriter(f1)){
   out1.write("test")
   print(f1.AbsolutePath)
}