package abstraction.template_method_pattern

class OnlineOrder extends OrderProcessTemplate{

   function selectItem(){
     print("Get item from warehurse...")
   }
   
   function processPayment(){
     print("process payment using CreditCard or Paypal")
   }
   
   function doDelivery(){
     print("send it to Fedex/UPS")
   }
}