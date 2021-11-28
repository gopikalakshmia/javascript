function student(Id,Name,Branch){
    this.Id=Id;
    this.Name=Name;
    this.Branch=Branch;
}

student.prototype.AddStudent=function(){
    console.log("Adding student");

}
student.prototype.UpdateStudent=function(){
    console.log("Updating student");
}
student.prototype.DeleteStudent=function(){
    console.log("Deleting student");
}
student.prototype.GetStudent=function(){
    console.log("Getting student");
}

var Stud1=new student("1","abc","ece");
Stud1.AddStudent();
Stud1.UpdateStudent();
Stud1.DeleteStudent();
Stud1.GetStudent();
console.log(Stud1);
