package threads

class Demo1 extends Thread{
  
  construct(name: String){
    super(name)
  }
  
   override function run(){
     try {
         var i = 15
         while(i > 0) {
            print("Thread: ${Name}, ${i}")
            Thread.sleep(100)
            i--
         }
      } catch (e) {
         print("Thread ${Name} interrupted.");
      }
      print("Thread ${Name} exiting.");
  }
  
}