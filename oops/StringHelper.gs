package oops

class StringHelper {
  
  static function toUpper(n: String): String{
    if (n == null){
      return "EMPTY STRING"
    }
    return n.toUpperCase()
  }
}