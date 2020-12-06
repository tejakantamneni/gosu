package interf

 //@Deprecated
 @Deprecated("Replaced by so and so class")
 class HeadphoneImpl implements Headphone {
   

  property get Name(): String{
    return "FSCJ"
  }
  
  override function increaseVolume(){
    print("volume increasing...")
  }
  
  override function decreaseVolume(){
    
  }
  
  override function answerCall(){
    
  }
  
  override function rejectCall(){
    print("in impl")
  }
  
  
}