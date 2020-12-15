package sort

class StudentNameComparator implements Comparator<Student>{
  
  override function compare(s1: Student, s2: Student): int{
    return s1.Name.compareTo(s2.Name)
  }
}