function employee(name,department,designation){
    this.name=name;
    this.department=department;
    this.designation=designation;
}


employee.prototype.add=function(){
    console.log(this.name);
    console.log("Adding to database");
}
employee.prototype.Printing=function(value){
    console.log(this.name);
    console.log("Printing"+value);
}

var  emp=new employee("gopi","IT","Developer");
console.log(emp);
emp.add();
var  emp=new employee("vishnu","IT","Developer");

emp.Printing("Hello");
