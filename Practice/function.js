//Function

function sayMyname(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("E");
    console.log("N");
    console.log("D");
    console.log("U");

}
//sayMyname()

// function addtwoNumber(number1, number2){
//    console.log( number1 + number2);

// }


function addtwoNumber(number1, number2){
//    let result= number1 + number2
//    return result
   
return number1 + number2

 
 }
const result= addtwoNumber(5,7)
//console.log("Result:",result);


function loginUserMessage(username="shiv"){
    if(username===undefined){
        console.log("please enter the username");
        return 

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Shivendu"));
//console.log(loginUserMessage());//its return undefined

//---function with object
function calculateCartPrice(val1,val2,...num1){//... rest operator
    return num1

}
//console.log(calculateCartPrice(200,300,500,2000,400));

const user ={
    username: "shiv",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));

//---------------------------------------------------
//Scope{}

let a=300//global scope
if(true) {
    let a=10
    const b =20
    console.log("INNER: ",a);//block scope

}
console.log(a);
//console.log(b);
//console.log(c);
