//JavaScript and classes
//OOP
//Object
//collection of properties and methods
//toLowerCase

//Why use OOp

//parts of OOP
//Object Literals
//constructor function

//Prototype 
//classes
//Instances(new,this)
//---------------------------------------------------
const user = {
    username: "Shivendu",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn


    this.greeting=function(){
        console.log(`Welcome ${this.username}`

        );
        
    }

    //return this
}

const userOne= new User("Shivaay",12,true)
const userTwo= new User("Shivendu",11,false)
console.log(userOne.constructor);
//console.log(userTwo);


////////------------------------------------
//Prototype


function multipleBy5(num){
    return num*5

}
multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);



function createUser(username,score){
    this.username=username 
    this.score=score

}

createUser.prototype.increment=function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    

}

const chai= new createUser("chai",25)
const tea = createUser("tea",250)

//myArray.prototype.map()
chai.printMe()




