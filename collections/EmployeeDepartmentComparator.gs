package collections

class EmployeeDepartmentComparator implements Comparator<Employee>{
  
  override function compare(o: Employee, o1: Employee): int{
    if(o.Department < o1. Department){
      return -1
    }else if( o.Department > o1.Department){
      return 1
    }else{
      return 0
    }
  }
}