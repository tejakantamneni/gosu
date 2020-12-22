
var nums = {7, 3, 1, 6, 0}
Collections.sort(nums)
//print(nums)


var e  = new Employee("John", "IT", "Manager")
var e1 = new Employee("Joe", "IT", "Supervisor")
var e2 = new Employee("Jill", "UW", "Manager")
var e3 = new Employee("Jimmy", "UW", "Supervisor")
var e4 = new Employee("Jack", "Claims", "Manager")

var employeeList = new ArrayList<Employee>(){e, e1, e2, e3, e4}

Collections.sort(employeeList)

print(employeeList)

Collections.sort(employeeList, new EmployeeDepartmentComparator().thenComparing(new EmployeeTitleComparator()))

