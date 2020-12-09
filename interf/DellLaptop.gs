package interf

class DellLaptop implements Headphone {

  delegate _headphone represents Headphone = new HeadphoneImpl()
  
   override function rejectCall(){
    print("in dell impl")
  }
  
  
}