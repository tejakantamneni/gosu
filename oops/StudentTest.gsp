
print(Student.PI)

var student = new Student("Student A")

var gosu = new Course(1, "Gosu")
gosu.Score = 90.5

var agile = new Course(2, "Agile"){:Score = 95.5}

student.AddCourse(gosu)
student.AddCourse(agile)
student.printGrades()



var arr = new String[]{"one", "two", "three"}
for(i in arr index idx){
  print("${idx} : ${i}")
}

for (i in (0..10).step(2)){
  print(i)
}