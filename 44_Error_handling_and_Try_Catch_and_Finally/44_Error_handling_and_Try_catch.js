console.log("Error handling and Try catch");


//THROW NEW ERROR📌📌📌
let name =  "Sanjay paul";
name  = undefined;
if(name!=undefined){
    throw new Error("Name is not undefined");
}
else{
    console.log("Name is undefined");
}


//TRY AND CATCH📌📌📌
try {
    // fadfasdf//ReferenceError
    console.log("this is right");
    // funcONE();//ReferenceError
    // null.console//TypeError
    undefined.console//TypeError
} catch (error) {
    console.log("Are you ok???");
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}finally{
    console.log("Finally we will run this");
}