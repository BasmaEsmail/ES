let first="first";
let sec="second";
[first,sec]=[sec,first]; //Destruct The Array
console.log(first);
console.log(sec);

/////////////// Q2 ///////////////////
function Result(...rest){
    let arr=rest;
    let res=[Math.max(...arr),Math.min(...arr)]
    return res
}
let result=Result(10,56,9,700,199)

console.log(`max is ${result[0]} min is ${result[1]}`);

//////  Q3 //////////////////
let Student={
    Std_name:"Mohamed",
    University:"AUC",
    Faculty:"Engineering",
    grade:"A"
}
console.log(`${Student.Std_name} is a student in faculty of ${Student.Faculty} in university
 ${Student.University} and his final grade is ${Student.grade} `)

 ///////////// Q4 ////////////////////
console.log("-----------------------")
let count=["Egypt","Spain","South Korea", "Egypt","Spain"]
let newSet= new Set(count);
console.log(...newSet);
console.log(".....")
for(  let i of newSet)
{
    console.log(i);
}
let c=count.length-newSet.size;

console.log(c);
console.log(".....")

Set.prototype.union=function(set)
{
    let arr = [...set,...this];
    return new Set(arr);
}
let secSet= new Set(["Ahmed","Mohamed"]);
console.log(secSet.union(newSet));
console.log(".....")
let thSet=new Set(["Germany","Spain"])
Set.prototype.diff=function(set)
{
    let resSet=new Set();
    for( i of this)
    {
        if(!set.has(i))
        resSet.add(i)
    }
    return resSet;
}
console.log(thSet.diff(newSet));

////////////Q4/////////////////
let map = new Map();
map.set("Ahmed",{Grades:[
    {Coursename:"JavaScript", Grade:"Excellent"},
    {Coursename:"Jquery", Grade:"Good"},
    {Coursename:"React", Grade:"V.Good"},
    {Coursename:"ESNext", Grade:"Good"},
    {Coursename:"NodeJS", Grade:"V.Good"}]
})
.set("Mohamed",{Grades:[
    {Coursename:"JavaScript", Grade:"Good"},
    {Coursename:"Jquery", Grade:"Good"},
    {Coursename:"React", Grade:"V.Good"},
    {Coursename:"ESNext", Grade:"Excellent"},
    {Coursename:"NodeJS", Grade:"V.Good"}]
})
.set("Aya",{Grades:[
    {Coursename:"JavaScript", Grade:"Good"},
    {Coursename:"Jquery", Grade:"Failed"},
    {Coursename:"React", Grade:"V.Good"},
    {Coursename:"ESNext", Grade:"Good"},
    {Coursename:"NodeJS", Grade:"V.Good"}]
});
for(i of map)
{
    console.log(i);
}
for(i of map)
{
    console.log(...i);
}

function sendName()
{
    console.log("----------")
    let studentName= document.getElementById("st").value
    for(i of map)
{
    if(i[0]==studentName)
    {
        console.log(`student ${i[0]}  has grades : `);
        console.log(i[1])
    }
}
    
}

