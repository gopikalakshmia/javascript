function student (Id,Name){
    Id=this.Id;
    Name=this.Name;
 }
 
 
 student.prototype.AddStud=()=>console.log("Adding student")
 student.prototype.getStud=()=>console.log("Getting student")
 student.prototype.UpdateStud=()=>console.log("Updating student")
 student.prototype.deletestud=()=>console.log("Deleting student")
 var s1=new student("1","gopi");
 s1.AddStud();
 s1.getStud();
 s1.UpdateStud();
 s1.deletestud();