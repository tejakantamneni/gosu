
var store = new StoreOrder()
store.processOrder(true)
print("--------")
store.processOrder(false)

print("--------")


var online = new OnlineOrder()
online.processOrder(true)
print("--------")
online.processOrder(false)