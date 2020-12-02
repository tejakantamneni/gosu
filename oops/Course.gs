package oops

class Course {
  
  public final static var GOSU: String = "Gosu"
  public final static var SECURITY: String = "Security"
  
  private var _id: int as readonly Id
  private var _name: String as Name
  private var _score: float as Score
  
  construct(id: int, name: String){
    this._id = id
    this._name = name
  } 
  
  property get Grade(): Character {
    if(this._score < 50){
      return 'F'
    }else if (this._score >= 50 and this._score <= 70 ){
      return 'D'
    }else if (this._score > 70 and this._score <= 80 ){
      return 'C'
    }else if (this._score > 80 and this._score <= 90 ){
      return 'B'
    }else if ( this._score > 90 ){
      return 'A'
    }
    return 'F'
  }

  @Override
  function toString(): String{
     return("----${this._id}---${this._name}------------${this._score}---------${this.Grade}--------")
  }
}