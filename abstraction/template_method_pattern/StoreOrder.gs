package abstraction.template_method_pattern

class StoreOrder extends OrderProcessTemplate{
    function selectItem(){
      print("picking the item from the shelf...")
    }
    function processPayment(){
      print("processing payment using Cash or CreditCard")
    }
    function doDelivery(){
      print("hand over item to customer")
    }
}