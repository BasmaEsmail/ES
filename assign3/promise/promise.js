
function getPosts() {
let userId=document.getElementById("id").value;
let head= document.createElement("h3");
let url=`https://jsonplaceholder.typicode.com/posts/${userId}`;

fetch(url).then(function(data){
    // console.log(data);
    data.json().then(function(parsed){
       head.innerHTML=parsed.body;
       document.body.appendChild(head)
    })
}).catch(function(err){
    head.innerHTML=err
})
 }
