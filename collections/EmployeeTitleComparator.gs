package collections

class EmployeeTitleComparator implements Comparator<Employee>{
  override function compare(o: Employee, o1: Employee): int {
    if(o.Title < o1.Title){
      return -1
    }else if(o.Title > o1.Title){
      return 1
    }else{
      return 0
    }
  }
}