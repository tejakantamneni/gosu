uses java.io.*

var inp: FileInputStream = null
var out: FileOutputStream = null

try {

   inp = new FileInputStream("src/main/gosu/files/input.txt");
   out = new FileOutputStream("src/main/gosu/files/output.txt");

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