package singleton

final class Singleton {

  static var _singleton: Singleton

  private construct(){
    print("constructing...")
  }
  
  static function  getInstance(): Singleton {
    if(_singleton == null){
      _singleton = new Singleton()
    }
    
    return _singleton
  }

}