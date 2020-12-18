
var e  = new Employee("John", "IT", "Manager")
var e1 = new Employee("Joe", "IT", "Supervisor")
var e2 = new Employee("Jill", "UW", "Manager")
var e3 = new Employee("Jimmy", "UW", "Supervisor")
var e4 = new Employee("Jack", "Claims", "Manager")

var employeeList = {e, e1, e2, e3, e4}

var empMap = new HashMap<String, List<Employee>>()

for (emp in employeeList){
  var k = emp.Department
  var currEmployees = empMap.get(k)
  if(currEmployees == null){
    currEmployees = new ArrayList<Employee>()
  }
  currEmployees.add(emp)
  empMap.put(k, currEmployees)
}

print(empMap)


//GOSU magic
var magicMap = employeeList.partition(\x -> x.Department)
print(magicMap)


