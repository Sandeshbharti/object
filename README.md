# object
nodes 
const student ={
    fullname : "ram ji ",
    marks : 75.5,
    printmark : function(){
        console.log ("lop something in js ")
    },
    lastname : "bharti ",
}
//************ access element in obj by (.) dot notation [obj.key =value of key ]

// console.log (student.fullname)
// console.log (student.marks)
// student.printmark()

// console.log (student.printmark())


//***********prototype(special properties in obj and arr store lot of method )  */
 
const raman={
    name: "raman raj ",
    rollno :21 ,
    adddres : "sahjanwa "
}
// ********* set prototype (parent properties accessable in children )
// here one more method to access (object["key"]) special case 
let sym  =Symbol ("key1") 
 let jsuser ={
    [sym]:"key1",
    "name" : "hitesh",
    location : "sahjanwa",
    email : "h@gamil.com",
    isLOggedIn : false ,
    lastlogday : ["monday ","saturaday"]
}

const symm=Symbol("poo");
// console.log (symm )
// console.log (typeof symm) 
 
let newobj={
    [symm]: "key1"
}
// console.log (newobj["symm"])
// console.log (typeof newobj["symm"])
//??????????? symbol in object declare not proper working 



//part 2 
tinderUser ={}
tinderUser.Id="123ab"
tinderUser.name ="sandeshbharti"
tinderUser.isloggedin = false 
// console.log (tinderUser)

// we can able to store info in nexted object method 
 
let o={
    name : "ram ji ji ",
    addredd: {
        firstadd: "sahjanwa",
        secondadd: "gorkhpur",
        permanentadd: {
            firstperadd: "vill",
            secperadd :"city"
        }
    }
}
//element or info access by nexted dot notation (.),just like below example 
// console.log(o.addredd.permanentadd.firstperadd)



// ********** add two or more object 
const objj1={
    1 : "a",
    2 : "b"
}
const objj2={
    3 : "c",
    4 : "d"
}
const objj3={
    5 : "e",
    6 : "f"
}
// const objj4=Object.assign({},objj1,objj2,objj3)
// console.log (objj4)
// const objj5={...objj1,...objj2,...objj3}
// console.log(objj5)
//both method work same but triple dot use most of time 


// ******************get all key or value of object 

// console.log (Object.keys(student))
//************** get all key or value of object in each sigle array 
console.log (Object.entries(student))









