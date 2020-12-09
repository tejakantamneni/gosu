
uses oops.Student

//
//var w = new Wish()
//
//var returnsAnn = (typeof w).TypeInfo.Methods
//
//returnsAnn.forEach(\e -> print(e + " -- " +  e.getAnnotation(Returns)))


var s = new TestClass()

//Reflection

var info = (typeof s).TypeInfo.getAnnotation(Author)

print(info)


