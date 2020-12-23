
var d = new Thread(new Demo2("Thread-1", 100))
var d1 = new Thread(new Demo2("Thread-2", 30))

d.start()
d1.start()