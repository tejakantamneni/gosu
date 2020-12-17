package threads

class Demo2 implements Runnable {
  var _name: String as readonly Name
  
  construct(name: String){
      this._name = name
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