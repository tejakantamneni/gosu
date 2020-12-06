package oops

class Student{
  
  private var _name: String as readonly Name
  private var _courses: List<Course>
  
  construct(name: String){
    this._name= name
  }
  
  property get Name() : String{
    return _name
  }
  

  function addCourse(course: Course){
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
    print("------------------${Name}---------------------")
    print("-------------------Grades---------------------")
    print("---ID---Name------------Score-----Grade-------")
    for(c in this._courses){
      print(c)
    }
  }
}