//array in js 
const myarr=[1,2,3,4,5,true,"ramji",false] 
//arr are resixeable in js ;
//store a collection of multiple type of data in a single name variable ;


// console.log (myarr[0]) 
//access ele from arr ;
//sallow copy and deep copy read ;

// console.log (typeof myarr )

const myarr2=new Array (2,3,5,6,8)
//declare array type 2 
// console.log (myarr2 )

// ************** Array-Method *****************

let heroes=["ironman","spiderman","krish","shaktian"]

heroes.push("sandesh")
// console.log(heroes )
//it change main arr ,add ele at the end of arr

// let pushv =heroes.push("sandesh")
// console.log(pushv)
//not return value so connot store in variable (posh result) 

heroes.pop()
// console.log (opm )
// console.log(heroes)
//del from end not need argument 
// let opm=heroes.pop()
//change main arr and return deleted value 

heroes.unshift("bharti")
// console.log (heroes )
//add ele in arr at the start 
//also make changes in main arr 
 
heroes.shift()
// console.log(heroes)
//del ele from start without take any argument 
//make change in main arr 

// console.log(heroes.includes("ironman"))
//ans with ture/false these ele available are not 
// console.log (heroes.includes("hulk"))

// console.log(heroes.indexOf("ironman")) 
//ele available on which index ,[arr.indexOf(element)]

// console.log(heroes.join())
//join method not join arr it print or log arr as a string

// console.log(heroes)
// console.log(heroes.slice(1,2))
// console.log(heroes)
//not make changes in main arr 

// console.log(heroes)
// console.log (heroes.splice(1,2,"sandesh"))
// console.log(heroes)

// ************* different between slice and splice 
// slice(startindex,endindex), 
// splice(startindex,delete count ,addnew element)

// *********

let mhero=[1,2,3,4,5]
let dhero=[9,8,7,6,5]
// mhero.push(dhero)
// console.log(mhero)
//array take any type of data here it take whole arr as an sigle element 

// //spread oprator ,used to add or concat arr 

// const allarr=[...mhero,...dhero,...heroes]
// console.log (allarr) 
// console.log( mhero.concat(dhero,heroes,))

// ************  Flat  ******************* 
 
let anotherarry= [10,20,30,["sandesh","bharti"],[40,50,[60,70,[80,90]]]]
// console.log (anotherarry)
// console.log(anotherarry.flat(5))
//expand nexted array in a single array ,give new array 


//  string to arr [Array.from(str)]
let str="krishna"
// console.log (Array.from(str) )

//object to array 
let obj={
    fullname :"sanjay",
    rool :21,
    school :"murari"
}

// console.log(Array.from([obj]))
// pass obj in squere bracket than it work else give enmty arr []

// ******* Array from many variable 
let score1=100
let score2=200
let score3=300
let score4=400
// [use (Array.of(var1,var2,varn..))]
// console.log (Array.of (score1,score2,score3,score4))

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//^^^^^^^^^^^^^^^   array finished with chai aur code ^^^^^^^^^^^^^^^^^

let marks=[17,27,37,47,57,67,87,98]
// console.log(marks.length)  // length of array [last index + 1 ]

// element on that index 
// console.log (marks[index])
// console.log (marks[0])

// ***** change or replace element 
marks[0]=100
// console.log(marks)

//********* looping on array  */

let loparr =[101,102,103,104,105,105,107]
// for(let i=0;i<loparr.length;i++){
//     console.log (loparr[i])
//}

// *** for of loop [working properly ]
// for (lop of loparr ){
//     console.log (lop)
// }
// *******
// console.log (loparr.toString())
// not change main arr ,it log array as string (text)
// console.log (loparr)

// &&&&&&&&&&&&&&&&&&&&&&&  Allmost done array in js &&&&&&&&&&&&&&&&&&&&&&&&&&



