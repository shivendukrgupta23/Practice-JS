const user = {
    username: "Shivaay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website `);// here this is current content.
        //console.log(this);output all the details of user.
    }

}
// user.welcomeMessage()
// user.username = "Shiv"
// user.welcomeMessage()
// isko browser ke under run krege toh global-> window object hota hai.

//console.log(this);// output : {} object /hmlog node environment ke under hai isliye empty aa rha hai.



// function chai(){
//     let username= "Gupta"
//     console.log(this.username);
// }
// chai()



//this ko object ke under use kr skte hai or function ke under nhi..



// const chai = function(){
//     let username= "kumar"
//     console.log(this.username);
// }
// chai()//output-> undefined



//Arrow function representation..
// const chai = ()=>{
//     let username="Gupta"
//     console.log(this.username);
// }
// chai()

// const addTwo =(num1,num2)=>{
//     return num1 +num2
// }



//Implicity return 

// const addTwo = (num1, num2) => num1 + num2 



//object ko return krna hoga toh kaise hoga
// const addTwo = (num1, num2) => ({username: "Shivaay"})
// console.log(addTwo(5,9));



//----------------------------------------------------------------
//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();