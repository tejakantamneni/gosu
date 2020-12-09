package abstraction

abstract class Policy {
  
  abstract function issue() 
  
  abstract function rate()
  
  function renew(){
    print("start renewing...")
    print("validating the policy...")
    rate()
    print("sending dec pages...")
  }
}