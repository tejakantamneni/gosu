package inheritance

class Snake extends Reptile{
  
  construct(name: String, legs: int, veg: boolean, eggs: int){
    super(name, legs, veg, eggs)
    print("constructor in Snake called")
  }
  
  function sayHiss(){
    print("hissss....")
  }
  
  function move(){
    print("I am crawling...")
  }
}