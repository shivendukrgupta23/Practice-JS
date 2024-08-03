//for loop
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element==5){
//         console.log("5 is  best number");
        
//     }
//     console.log(element);
    
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//        // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log((i + '*' + j + '=' + i*j));
        
        
        
//     }
// }



// let myArray= ["flash", "batman","superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }

//keywords:break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break
        
//     }

//     console.log(`value of i is ${index}`);
    
    
// }


// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         continue
        
//     }

//     console.log(`value of i is ${index}`);
    
    
// }


//-----------------------------------------------------------------------

//While loop:
// let index=0
// while(index <=10){
//     console.log(`value of index is ${index}`);
//     index=index+2;
    
// }


// let myArray=['flash','batman','superman']
// let arr=0

// while(arr < myArray.length){
//     console.log(`Value is ${myArray[arr]}`);
//     arr=arr+1;
    
// }


//----------------

//do-while
// let score=12
// do{
//     console.log(`Score is ${score}`);
//     score++;
    
// }while(score<=10)


//------------------------------------
//higher order array loops:

//for of

// const arr=[1,2,3,4,5
// ]
// for (const num of arr) {
//     console.log(num);
    
    
// }


// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(greet);
    
    
// }



//--------------------------------

//Maps

// const map =new Map()

// map.set("IN","INDIA")
// map.set('USA', "United States Of America")
// map.set('Fr', "France")
// //console.log(map);


// for (const [key,value] of map) {
//     //console.log(key, ':-',value);// this is not way to iterate within the map.
    
    
//}

// const myObject = {
//     'game1': 'NFS',
//      'game2': 'Spiderman'   
// }

// for (const [key,value] of myObject) {
//     console.log(key, ':-',value);
    
    
// }




//------------------------------------
//object


// const myObject={
//     js: 'javascript',
//     cpp:'C++',
//     py:'Python',
//     rb:'ruby',
//     swift: "swift by apple"

// }

// for (const key in  myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
// }




// const programming= ["js","rb","py","java","cpp"]

// for (const key  in programming) {
//     console.log(programming[key]);
    

    
// }


//--------------------------------------------


//forEach


//const coding = ["js","ruby","java","python","cpp"]
// coding.forEach( function (item) {
//     //console.log(item);
    

// })



//coding.forEach((item)=> {
   // console.log(item);
    
//})


// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)


// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
    
// })



// const myCoding = [
//     {
//         languageName: "Python",
//         languagefileName:"python" 
//     },
//     {
//         languageName:"java",
//         languagefileName:"java"
//     },
//     {
//         languageName:"javascript",
//         languagefileName:"js"
//     }
// ]
// myCoding.forEach( (item) => {
//     console.log(item.languageName);
    
// })


//-------------------------------------------------------------------



//Filter map and reduce:

// foreach having nothing to return

// const coding= ["js", "ruby", "java", "python","cpp"]

// const values = coding.forEach( (item)=>{
// //console.log(item);
//     return item
    
// })
// console.log(values);




 const mynums = [1,2,3,4,5,6,7,8,9,10]

//  let newNums= mynums.filter( (nums) => {
//     return nums > 4
//  })
// console.log(newNums);


//const newNums= []

mynums.forEach( (nums) => {
    if(nums > 4){
       // newNums.push(nums)
    }
})
//console.log(newNums);

//----------------------------------------------------------
//map

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// //const newNums = myNumbers.map( (nums) => nums+10)

// const newNums= myNumbers
//                .map((num)=> num*10)
//                .map((num)=> num+1)
//                .filter((num)=> num >=40)

// console.log(newNums);


//---------------------------------------------------

 const myNums = [1,2,3]

//  const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
//  }, 0)


const myTotal= myNums.reduce((acc,curr) => acc+curr,0)
 console.log(myTotal);


 const shoppingCart=[
    {
      itemName: "js course",
      price: 2999
    },
    {
        itemName: "py course",
        price: 3999

    },
    {
        itemName: "react course",
        price: 2950
    },

 ]


const priceTopay =  shoppingCart.reduce( (acc,item) => acc + item.price,0)
 console.log(priceTopay);
 

