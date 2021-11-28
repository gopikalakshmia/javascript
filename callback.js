const cprint=function ()
{
    console.log("Dta added in mongodb");
}

function node_add(){
    const data={name:"Gopi"};
    console.log("giving data to mongodb");
    db_add(data,cprint);
}
function db_add(data,cprint){
    console.log(data);
    console.log("data passed to mongodb");
    cprint();

}

node_add();

