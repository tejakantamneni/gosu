package oops

class Student {
  
  public static final var PI:float = 3.14
  
  private var _name: String as Name
  private var _courses: List<Course>
  
  construct(name: String){
    this.Name = name
  }
  
  property get Name() : String{
    return _name
  }
  
  property set Name(_n: String){
    if (_n.length == 0){
      throw new RuntimeException("name can't be empty")
    }
    _name = _n.toUpperCase()
  }
  
  function AddCourse(course: Course){
    if(this._courses == null){
      this._courses = new ArrayList<Course>()
    }
    this._courses.add(course)
  }
  
  function findCourse(_id: int): Course{
    if(this._courses == null){
      return null
    }
    for(c in this._courses){
      if(c.Id == _id){
        return c
      }
    }
    return null
  }
  
  
  override function toString():String{
    return _name
  }
  
  function printGrades(){
    print("-------------------Grades---------------------")
    print("---ID---Name------------Score-----Grade-------")
    for(c in this._courses){
      print(c)
    }
  }
}