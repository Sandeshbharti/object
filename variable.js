//************** let , const , var -  in js  */
// Let, variable cannot re-declared but can be updated. a block scope variable [use most ]
//Const, variable cannot-be re-declared or not be updated.A block scope variable [use most ]
//var,variable can be re-declared and update also .A globle scope variable . 
//block scope, variable are aceesable  only live or acessable in its  block {},
//globle scope, variable are acessable in anywhere in full code 


//log more variable in sigle time 
let var1=25
let var2=50
let var3=75
let var4=100
// console.log (typeof [var1,var2,var3,var4])
//log as object 
// console.log (typeof (var1,var2,var3,var4))
//log as number 

///console.table([var1,var2,var3,var4])
//log variables in single table 

//************* */ data type in js 
//               primitive data type (7)
// 1 - number ,typeof number is "number"; number  under 2 to power 53
// 2 - string ,stypeof string is string ; "Text content "
// 3 - boolean ,typeof boolean is boolean ; true or false 
// 4 - undefined , typeof undefined is undefined ;no declare till now 
// 5 - NUll , typeof null is "object" ;standalone value (empty)
// 6 - bigInt ,typeof bigint is bigint ;num over 2to power 53
// 7 - symbol - typeof symbol is symbol ;difine the uniqeness 

//                non primitive or refrence data type 
// 1 - object ,{} with name called object,data store in [key:value] pair 
// 2 - Array ,[]
// 3 - function ,(){}

//                                    datatype conversion in js
 //        1- string to number 
let score1="33"  //****data type is num ,value is 33(number)
// console.log(score1)
// console.log(typeof score1)
// let valinnum=Number(score1)
// console.log(valinnum)
// console.log(typeof valinnum)

let score2="33abc"  //****data type chage in num,but value give =Nan(not a number)
// console.log (score2)
// console.log(typeof score2)
// let valinum=Number(score2)
// console.log(valinum)
// console.log(typeof valinum)

let str="bharti"   //****data type chage in num,but value give =Nan(not a number)
// console.log(typeof str )
// let valinumstr =Number(str)
// console.log(valinumstr)
// console.log(typeof valinumstr)
//          note *
//data type change karte hai to data type change ho jata hai lekin
//  abhi abhi unexpected value return karta hai ,data type change 
//karne ke bad value ka use dhyan se karna padta hai  

let empty =" "  // ****data type change in number ,empty string change in zero (0)
// console.log(empty)
// console.log(typeof  empty)
// let emptyinnum=Number (empty)
// console.log(emptyinnum)
// console.log(typeof  emptyinnum)

//         null to number 

let standalone=null  //****data type change in num ,null change in zero (0)
// console.log (standalone)
// console.log (typeof standalone)
// let standaloneinnum=Number(standalone)
// console.log(standaloneinnum)
// console.log(typeof  standaloneinnum)

//       boolean to number 
let online =true  // ***true change in one (1)
// console.log (online)
// console.log (typeof online)
// let onlineinum=Number (online)
// console.log (onlineinum)
// console.log (typeof onlineinum)

let ofline =false    //false change in zero (0),boolean to number 
// console.log (ofline)
// console.log (typeof ofline)
let oflineinum=Number (ofline)
// console.log (oflineinum)
// console.log (typeof oflineinum)

let fline =""
// console.log (fline)         //***** */ empty string(" ") change in false 
// console.log (typeof fline)  //*****empty str to boolean =false 
let flineinum=Boolean (fline)
// console.log (flineinum)
// console.log (typeof flineinum)

let line ="sadn"
// console.log (line)         //***strng change in true 
// console.log (typeof line)  //**** */ str to boolean =true 
let lineinum=Boolean (line)
// console.log (lineinum)
// console.log (typeof lineinum)

//                strig and numbers oprations (these kind of thing not do in an project)
//                               NOT USE 
// console.log ("1"+2)
// console.log (typeof( "1"+2))   
//str+num=str ,out=12 ,datatype =string 

// console.log (1+"2")
// console.log (typeof( 1+"2"))   
//num+st=str ,out=12 ,datatype =string 

// console.log ("1",2+3)
// console.log (typeof ("1",2+3))
//str+num1+num2=str+(num1+num2),data type id number ,out=15

// console.log(1+2+"3")
// console.log (typeof (1+2+"3"))
// out =33,datatype=string 
      
// console.log(true)
// our=true 

// console.log (+true)
//out-= 1

// console.log (true+)
// out = eror 

// console.log ("")
// out=nothing empty 

// console.log (+"")
//out =0

// ***************
















