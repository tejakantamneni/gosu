package abstraction

class PLPolicy extends Policy {
  
  override function issue(){
    print("issuing a PL Policy")
  }
  
  override function rate(){
    print("rating a PL Policy")
  }
}