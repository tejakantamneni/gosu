package one
uses java.time.Period
uses java.time.Instant
uses java.time.ZoneId
uses java.time.LocalDate

class Student {
  construct(fname: String, lname: String, dob: Date){
    this.firstName = fname
    this.lastName = lname
    this.dateOfBirth = dob.toInstant().atZone(ZoneId.systemDefault()).toLocalDate()
  }
  
  private var firstName: String as FirstName
  private var lastName: String as LastName
  private var grade: char as Grade
  private var dateOfBirth: LocalDate as DateOfBirth
  
  property get Name(): String{
    return firstName + " " + lastName
  }
  
  function age(): int{
    return Period.between(dateOfBirth, LocalDate.now()).Years
  }
  
  property get Age(): int {
    return Period.between(dateOfBirth, LocalDate.now()).Years
  }
  
}