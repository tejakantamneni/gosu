
var a:Headphone = new HeadphoneImpl()

a.rejectCall()
print(a.Name)
print(Headphone.JackSize)

print("----------")
var laptop = new Laptop()
laptop.increaseVolume()
laptop.rejectCall()