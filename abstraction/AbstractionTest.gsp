
//The below line doesn't compile as Policy is an abstract type and can't be instantiated
//var p = new Policy()

//The below two types can be instantiated as they are specific types of policies extending Policy type
var pl = new PLPolicy()
var cl = new CLPolicy()

print(pl typeis Policy) //returns true as PLPolicy is extending Policy

pl.issue()
cl.issue()


print("--------------")
pl.renew()
print("--------------")
cl.renew()