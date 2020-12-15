
var s1=  new Student(1, "Z")
var s2=  new Student(3, "B")
var s3=  new Student(2, "C")
var s4=  new Student(4, "A")

var students = {s1, s4, s3, s2}
print("------------------")

print(students)
Collections.sort(students)
print(students)

print("------------------")
Collections.sort(students, new StudentNameComparator())
print(students)