package interf

interface Headphone {
  
  property get Name(): String
  
  public var JackSize:float = 3.5
  
  function increaseVolume()
  
  function decreaseVolume()
  
  function answerCall()
  
  function rejectCall(){
    print("in interface")
  }
  
}