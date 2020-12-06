
var w = new Wish()

var returnsAnn = (typeof w).TypeInfo.Methods

returnsAnn.forEach(\e -> print(e + " -- " +  e.getAnnotation(Returns)))