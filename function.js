//  ***************    function in jawascript    **************
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//step 1- create function = Functon nameoffuncton (para1,para2,paran){do any work }
// //step 1- used function or call/invoke the function , [    nameoffunction();    ]
// function saymyname(num){
   
//     if (num>10){
        
//             console.log (`that you provide is ${num} greater than 10`)
//         }
//         console.log("bharti ")
//         console.log("sandesh ")
//         console.log("kumar")

// }
// saymyname();
// saymyname(50);

//function for add two number 
// function addtownum(x,y){
    // console.log (x+y)}

// addtownum(2,3)
// addtownum(10,10)

//funtion for mul two num
// function mul(a,b){
//     return a*b 
// } 
// mul(5,5);
// console.log (`${mul (5,5)}`) //log as string 
// console.log (mul(5,5)) //log as a number 

//             ************      Arrow function in js *******************
 
//()=>{},that is the arrow functon ,it need a name(variable) to servive 
// that is the compact way to write a function ,use it for some compact work 

// let arofunc =(arr)=>{
// console.log(`that is the arrow function boss ${arr}`)}


// arofunc() //if function not get para/argument than set it to undefined 
// arofunc("sandesh ")

//practice question - create a function that takes a string and 
// return the count of vowels in the string ?
//[for of loop used ,if satement]

// let count =0;
// function countfun(string){
//     for (str of string){ 
//         if (
//             str==="a" ||
//             str==="e" ||
//             str==="i" ||
//             str==="o" ||
//             str==="u"
//             ){       
//         count++
//         }
//     }
//     console.log (count)
// }

// countfun();                   //if para not pass func will give error 
// countfun("ram");
// countfun("aeiou");          //second time call karne per privious count  
// countfun("sdtry");          //second wale main add ho jata hai

// ********** for Each method in array **********

// let sun=[10,20,30,40]                          //working exameple(1)
// sun.forEach((val)=>{                           //for Each method 
// console.log (val)
// })

// sun=[10,20,30,40]
// sun.forEach((val,idx,arr)=>{                     // example(2)
//     console.log(`${val} ${idx} ${arr}`)           //for Each method
//    })




//********* question  cout vowel in string (practice)

// console.log (" s a n d e s h b h a r  t i ")
// let total =0;
// let strin ="mohan"
// for (str of strin  ){ 
   
//             if (
//                 str==="a"  ||
//                 str==="e" ||
//                 str==="i" ||
//                 str==="o" ||
//                 str==="u"
//                 ){
                
//             total++
//             }
//         }
//         console.log (total)            

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// some more array mehode in array 
//(1)-map method ,(2)-filter method ,(3)-reduce method,(4)-for Each method  

// (1), arr.map(callback) || arr.map((val)=>{do any work})
// [work for each idxvalue,like for each ,give new array]

// (2),arr.flter(callback)|| arr.filter((val)=>{return val%2===0})
// on given condition it give a new array on base that condition

//(3)-arr.Reduce(calllback) || arr.reduce((res,curr)=>{give single value}) 
// that method reduce array in a single value 

//(4)-for Each (calllback) || for Each ((val,idx,arr){console.log(`${val}, ${idx},${arr}`)})
//work for each element of array 


let number6=[10,12,14,16,18]
// console.log (typeof number6)    //object 
//print the square of each ele (map method)
// let newarr=number6.map((val)=>{
//     console.log (val * val) 
//     return val*val 
     
// })

// if console in under method than object  
// console.log (newarr)   //log as object ,working 
// console.log (typeof newarr)
 

let nums=[1,2,3,4]
// console.log (typeof nums)    //typeof object 
let nemser={
    name : "sadnesh "
}
// console.log (typeof nemser)   //typeof object 

//(2)- *********filter method (filter on given condition)

let arrf=[10,12,45,60,45,70,80,98,75,44,60,100]
let newarrf=arrf.filter((val)=>{
    // console.log(val%5===0)
    // return val%5===0
    return val%5!==0
})
// console.log (newarrf)
// *******
// last method from apana college 
// (3)- reduce method in js 

let red2=[5,7,10,15,19,20,24,25,30]
//not try to use if condition ,here use ternry oprator 
let newred2 =red2.reduce((res,curr)=>{
//    return  res>curr? res : curr 
//    return  res+curr
   return  res<curr? res :curr 
})
// console.log (newred2)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//     finished from apana college 