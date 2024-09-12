const descripter = Object.getOwnPropertyDescriptor(Math,"PI")



console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const tea = {
    name: 'ginger tea',
    price: 280,
    isAvailable:true,

    orderTea: function(){
        console.log("tea is ready");
        
    }

}
console.log(Object.getOwnPropertyDescriptor(tea,"name"));


// Object.defineProperty(tea,'name',{
//     writable:false,
//     enumerable:false 
// })

// console.log(Object.getOwnPropertyDescriptor(tea,"name"));

for(let [key,value] of Object.entries(tea)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);

    }
    
    
}