// nullish coalecing oprator (??) special design for null and undefined value data type 
// const num= null?? "sandesh";    //sandesh 
// console.log(num)
// const nem2= ""??42;               //empty str 
// console.log(nem2)
// const num2=10??0;           
// console.log(num2)                  //10


// let oneobj={}
// let two ={
// name:"sandesh bj",
    // class :10,
    // rollno:101
// }
  
// how to check a object was empty or not 

// let newbj=Object.keys(oneobj).length===0? console.log("true empty ") : console.log("no empty ")   //create new array  of provided objects keys  
// console.log (newbj)

// if (Object.keys(oneobj).length===0){
//     console.log ("that obj was empty")
// }else {
//    console.log( "that obj contains datas ")
// }

// loops in js (nexted loops in js)

// for (let i=1;i<=5;i++){
//     console.log ("ii= ", i)
//    for(let  j=1;j<=5;j++){
//         console.log ("jjjj= ",j)
//         console.log ("QQQ= ", i)
        
//     }
// }
// for(let  j=1;j<=5;j++){
//     console.log ("j = ", j)
// }

// breack and continue 

// let text =""
// for (let i=1;i<=10;i++){
      
//     if (i===3){
//         break ; 
//     }
//     text=text+i;
//     console.log ("loop was running =i ",i); 
// }
// console.log (text)



//&&&&&&&&&&&& map mmethod -no duplicate entry and ordeer fixed , entrys order 

// const mapp  =new Map();
// mapp.set("name","indea");
// mapp.set("rollno",120);
// mapp.set("name","indea");
// mapp.set("add","tenuan");
// mapp.set("add","tenuan");
// console.log (mapp )



// interation on objects or looping on a object
//note -normal object is not iterable 

// const obj={
//         name:"sandesh bj",
//         class :10,
//         rollno:101,
//         time :201
//     }

// for ([key ,value] of Object.entries(obj) ){
//     console.log ([key ,value])                         
// }
// console.log (Object.entries(obj))

// const obbj={
//     name:"sandesh bj",
//     class :10,
//     rollno:101,
//     time :201
// }

// for (val in obbj){
//     console.log (obbj[val])
// }
let na=""
// some important array method in js  [foreach, filter, reduce, map ]
const arr2=["sandesh","kumar","bharti","class","sahjawa","gorkhpur"]
// arr2.forEach((val)=>{
// for (let i=1;i<=1;i++){
//     na =na +val     
//  }
//  console .log (na)
// })
// not return any value 
let all =arr2.forEach ((item,index,array )=>{
 (item ,index ,array)
// return item 
})
// console.log (all )// not work 


// filter in js 
//array.filter(callback)=>((val )=>{condition })

// let num =[1,2,3,4,5,6,7,8,9]
// arr2.filter ((val )=>{
//     // console.log (val )
// })
// num.filter ((val )=>{
//     if (val>5){

//     }else {
//        console.log (val )
//     }
// })

const books  =[
    {tittle:"bookone",genre:"fiction","publish":1981,edi:2004 },
    {tittle:"booktwo",genre:"non-fiction","publish":1992,edi:2008 },
    {tittle:"bookthree",genre:"history","publish":1999,edi:2007 },
    {tittle:"bookfour",genre:"fiction","publish":2000,edi:2010 }
]

// books.filter ((book)=>{
// if ( book.publish>=2000){
//     console.log (book )
// }else {}
// })

// books.filter ((book)=>{
// if ( book.publish>=2000){
//     console.log (book )
// }else {}
// })

// books.filter ((book)=>{
//     if ( book.genre==="fiction"){
//         console.log (book )
//     }else {}
//     })

// event and dom not supprot 

// number and math 


//how to declare unber specialy 
let score =101;
// console.log (score )
// console.log (typeof score )
// let blance =new Number (102)
// console.log (blance )
// console.log (typeof blance)
// console.log (typeof (score.toString()) )   /=> now chnge in string data type 


//***********  Math  */

// console.log (Math) //an object cantain much information 
// console.log( typeof Math) //math is an object 
let a =-5;
// console.log(Math.abs(-a))
// console.log(Math.round (5.4))
// console.log(Math.round (5.6))
//normal rounding 
// console.log(Math.floor (5.4))
// console.log(Math.floor  (5.6))
//always mininum rounding 
// console.log(Math.ceil (5.4))
// console.log(Math.ceil  (5.6))
//always maximim rounding 


// genrate random number 

// console.log (Math.floor((Math.random()*10+1)));
// console.log (Math.floor(Math.random()*(20-10+1)+10))


// date and time in jawascript 
// let mydate=new Date()
// console.log (mydate.toString )
// console.log (mydate.toDateString )
// console.log (mydate.toLocalString )
// console.log (typeof mydate )
//not understand properly
// console.log(Date.now)//=>[Function: now]
//leave chapter 

// function in js 

// function addNums(x,y){
//   console.log(x+y )
// //   return x+y ;

// }
// addNums(2,3)
// addNums(3,3)

const aarr=(a,b)=>{
   console.log (a+b)
//    return b+a // kisi fuction me koi value 
//return nahi ho rahi hai only value log ho rahi hai 
}
// aarr(2,2)

function login (username="ram"){
    if (username===undefined|| username!== username){
        console .log ("please enter a valid username ")
    }else{
        console.log (`${username} is jsut  login now `)
    }
}
// login("sandesh")
// login("")
// both output is same => username is just login nowe 
// login ()   //out=> please enter a valid name 
// login ()  // if connot provide username defalt name will taken 
             //if we provide para/username than it will override default 

//%%% whin parameter is not countable 
// function adds (x,y,...a){
//  console .log (x,y,...a)
// }   
// adds(1,2,3) 
// adds(1,2,3,4,5) 
// adds(1,2,3,9,8,7,6,5,4,3,2,1)

// kisi object ko function se handdle karna 

const myobj={
    name:"ramji",
    class:10,
    rollno:21
}
function handleobj(anyobj){
   console.log (`useername is ${ anyobj.name} and class is ${anyobj.class} ,and his roll no is ${anyobj.rollno}`)
}
// handleobj(myobj)
const myobj2={
    name:"laxman ji ",
    class:11,
    rollno:22
}
// handleobj(myobj2)
const myobj3={
    name:"mata sita ji ",
    class:12,
    rollno:23
}
// handleobj(myobj3)

// handling arary in js by fuction ????????????
// let ara =[10,11,12,13,14,15,16,17,18,19,20]
// handlearr (ara)  // normal fucton can call any where before fuction or after fuction 
// function handlearr(anyarr){
//    console.log (`at index 0 =>${anyarr[0]}and index 2=>${anyarr[2]}`)
// }
// // handlearr (ara)
// let ne=[110,210,310,140,115]
// handlearr(ne)

// how work nexted scope 
//under wale scope me bahar wale scope ke variable accessable hote hai 
//but under wale kisi bhi bahar wale scope me kisi bhi under ke scope ke 
//variable accessable nahi hote hai 

// this keyword in jawascript 
//this - refers current context ,like its own fuction/object   ko refer karata hai 

// const objrr={
//     ame:100,
//     ronll:21,
//     function (){
//         console.log(`this ${this.ame} is best number  `)

//     }
// }
// console.log (objrr.function())

// Arrow function is start 




















