function node_add(){
db_add().then(
    (value)=>{console.log("success");},
(err)=>{console.log("error occured");});
}

function db_add(){
    return new Promise((resolve,reject)=>{
    resolve("success");
    if(err)
    reject(err)
}
    );
}

node_add();

function print(){
    add(5,4).then(
        (value)=>{
            console.log(value+"printed");
        },
        (err)=>{
            console.log("error occured");
        }
        );

}

function add(n1,n2){
    return new Promise(
        (resolve,reject)=>{
            resolve(n1+n2);
            if(err)
            reject(err);
        }
    );
}

print();