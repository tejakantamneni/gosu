package oops

class AnotherCourse extends Course{

  construct(id: int, name: CourseType){
    super(id, name)
  } 
  function anotherMethod(){
    print("from another method....")
  }
}