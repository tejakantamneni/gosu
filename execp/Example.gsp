



try{
  //code that would throw an exception
  var i = 10/0
}catch(e){
  // what should you do when this happens. e provides the details of exception
  print(e.Message)
  print(e.Cause)

}finally{
  //always executes whether an exception happens or not
}