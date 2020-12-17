
uses java.io.*

var cin: InputStreamReader = null

try {
   cin = new InputStreamReader(System.in);
   System.out.println("Enter characters, 'q' to quit.");
   var c:char
 
   do {
      c = (char) cin.read();
      System.out.print(c);
   } while(c != 'q');
}finally {
   if (cin != null) {
      cin.close();
   }
}