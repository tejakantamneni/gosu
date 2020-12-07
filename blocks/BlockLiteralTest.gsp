var bl(p: String): String

var bl1: block(p:String): String


bl = \p -> p.toUpperCase()
bl1 = \p -> p.toUpperCase()


print(bl("teja"))
print(bl1("teja"))