package abstraction.template_method_pattern

abstract class OrderProcessTemplate {
  
  abstract function selectItem()
  abstract function processPayment()
  abstract function doDelivery()
  
  final function processOrder(isGift: boolean){
    selectItem()
    if(isGift){
      print("wrapping gift...")
    }
    processPayment()
    doDelivery()
  }
}