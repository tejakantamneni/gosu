package interf

class HeadphoneImpl implements Headphone {
   
  property get Name(): String{
    return "FSCJ"
  }
  
  override function increaseVolume(){
    
  }
  
  override function decreaseVolume(){
    
  }
  
  override function answerCall(){
    
  }
  
  override function rejectCall(){
    print("in impl")
  }
  
  
}