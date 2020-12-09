package abstraction

class CLPolicy extends Policy{
  
  override function issue(){
    print("issuing a CL Policy")
  }
  
  override function rate(){
    print("rating a CL Policy")
  }
  
}