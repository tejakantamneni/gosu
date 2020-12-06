package interf

class Laptop implements Headphone{
  delegate _headphone represents Headphone //= new HeadphoneImpl()
  
  construct(){
    _headphone =  new HeadphoneImpl()
  }
  
  @Throws(java.lang.Exception, "This method throws an exception if there is no call currently in progress")  
   override function rejectCall(){
    print("in laptop")
  }
  
}