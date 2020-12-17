
var d = new Thread(new Demo2("Thread-1"))
var d1 = new Thread(new Demo2("Thread-2"))

d.start()
d1.start()