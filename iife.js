const printfuction=function(){
    console.log("printing");
}();


const empid=(function(){
    let count=0;
    return function(){
        ++count;
        return  'emp'+count;
    };
})();
console.log(empid);
console.log("emp1 "+empid());
console.log("emp2 "+empid());