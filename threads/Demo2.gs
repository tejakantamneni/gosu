package threads

class Demo2 implements Runnable {
  var _name: String as readonly Name
  var _sleepTime: int as readonly SleepTime
  
  construct(name: String, sleepTime: int){
      this._name = name
      this._sleepTime = sleepTime
  }
  
  override function run(){
     try {
         var i = 15
         while(i > 0) {
            print("Thread: ${Name}, ${i}")
            Thread.sleep(SleepTime)
            i--
         }
      } catch (e) {
         print("Thread ${Name} interrupted.");
      }
      print("Thread ${Name} exiting.");
  }
  
}