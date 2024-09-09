// const coding =["js","ruby","java","python","c"];

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return itemnode 
// })
// console.log(values);


// const  myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>num >4)
// console.log(newNums);




//const  myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>{
//      return num > 4 // when we use this type of condition in the brackets then it compuslory to write return keyword then output will display otherwise empty list will be display. 
// })
// console.log(newNums);


// const newNums=[]

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)

//     }
// })
// console.log(newNums);


//--------------------------------

// const myNumers=[1,2,3,4,5,6,8,9,10]

// //const newNums= myNumers.map((num)=> {return num + 10})

// const newNums=myNumers
//                    .map((num)=> num *10)
//                    .map((num)=> num + 1)
//                    .filter((num)=> num >=40)

// console.log(newNums);



//--------------------------------------------------------------
// Reduce 



 const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0)
// console.log(myTotal);




const myTotal=myNums.reduce((acc,curr)=> acc + curr,0)
console.log(myTotal);



const shoppingCart=[
    {
        itemName: "js course",
        price: 3000
    },
    {
        itemName: "data science course",
        price: 4900
    },
    {
        itemName: "mobile dev course",
        price: 5990
    },
    {
        itemName: "data analytics course",
        price: 7999
    },

]
const priceToPay= shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceToPay);








