//Objects

//Singleton
// Object.create


//object literals
const mySym= Symbol("key1")


const JsUser = {
    name: "Shivendu",
    "full name": "Shivendu Kumar Gupta",
    [mySym]: "mykey1",
    age: 19,
    location: "Jaipur",
    email: "Shivendu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]


}
//console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])


// JsUser.email = "Shivendu@chagpt.com"
// console.log(JsUser["email"]);

//Object.freeze(JsUser) when we use object.freeze then no change is allowed.

// JsUser.greeting = function(){
//     console.log("Hello Js user");
// }



// JsUser.greetingTwo = function(){
//     console.log(`Hello Js user, ${this.name }`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


//-----------------------------------------

//object singleton
//const tinderUser = new Object()// singleton object
const tinderUser = {}    // non singleton object

tinderUser.id = "123abc"
tinderUser.name= "Shivaay"
tinderUser.isLoggedIn = false


//console.log(tinderUser);


const regularUser = {
    email: "sonal@gamil.com",
    fullname : {
        userfullname: {
            firstname: "Shivaay",
            lastname: "oberoi"
        }
    }

}

//console.log(regularUser.fullname.userfullname.firstname);

//combining object

const obj1 = {1: "a", 2: "b"}
const obj2= {3: "a",4:"b"}
const obj4 ={5: "c", 6: "d"}

//const obj3 = {obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2)

//const obj3 = {...obj1, ...obj2,...obj4}

//console.log(obj3);

//console.log(tinderUser);

//console.log(Object.keys(tinderUser));// its return array format
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));//its return key value pairs in array format.

//console.log(tinderUser.hasOwnProperty('isLoggedOut'));//its return boolean value


//----------------------------------------------------------
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor:Instructor}= course// this line means to destruturing

//console.log(courseInstructor);
//console.log(Instructor);
