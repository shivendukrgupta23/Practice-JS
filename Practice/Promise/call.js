//function SetUsername(username){
    //complex DB calls
    //this.username=username 
  //  console.log("called");
    

//}
//function createUser(username,email,password){
   // SetUsername.call(this,username)
    //this.email=email 
    //this.password=password 
//}//

//const chai = new createUser("chai", "chai@fb.com","123")
//console.log(chai);

//--------------------------
//class  constructor and static


// class User{
//     constructor(username,email, password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword(){
//          return `${this.password}abc`
//      }
//      ChangeUsername(){
//          return `${this.username.toUpperCase()}`
// }


//  }
// //  const chai = new User("chai","chai@gmail.com","123")
// //  console.log(chai.encryptPassword());
// //  console.log(chai.ChangeUsername());

// //behind the scene
// function User(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password
// }

// User.prototype.encryptPassword=function(){
//     return `${this.password}abc`
// }


// User.prototype.ChangeUsername=function(){
//        return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea","tea@gmail.com","123")


// console.log(tea.encryptPassword());
// console.log(tea.ChangeUsername());


//----------------------------
//Inheritence
// class User {
//     constructor(username){
//         this.username=username
//     }
//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
        
//     }

// }

// class Teacher extends User{
//     constructor(username,email,password){
//         super(username)
//         this.email=email 
//         this.password=password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
        
//     }
// }


// const chai = new Teacher("chai","chai@teacher.com","123")
// chai.logMe()
// const masalaChai= new User("masalaChai")
// masalaChai.logMe()

// console.log(chai === masalaChai);
// console.log(chai instanceof Teacher);
// console.log(chai instanceof User);


///----------------------
//Static

class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static  createId(){ // this static keyword is not access by const shivendu. 
        return `123`
    }
}

const shivendu = new User("Shivendu")
//console.log(shivendu.createId());



class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email


    }
}

const  iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()




