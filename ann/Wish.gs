package ann

class Wish {

  @Param("name", "name of the person to greet")
  @Returns("A greeting message")
  @Throws(java.lang.Exception, "An exception if the name is null")
  public function sayHello(name: String): String{
    return "Hello, ${name.toUpperCase()}"
  }
}