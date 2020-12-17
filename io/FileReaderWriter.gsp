uses java.io.*

var inp: FileReader = null
var out: FileWriter = null

try {

   inp = new FileReader("src/main/gosu/files/input.txt");
   out = new FileWriter("src/main/gosu/files/output.txt");
   
   var c: int
   do{
     c = inp.read()
     out.write(c)
   } while (c != -1) 
}finally {
   if (inp != null) {
      inp.close();
   }
   if (out != null) {
      out.close();
   }
}