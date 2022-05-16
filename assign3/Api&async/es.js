////EVERY ELEMENT IS STRING
var fruits = ["apple", "strawberry", "banana", "orange", "mango"] ;
var boolRes= fruits.every((item)=> isNaN(item))
console.log(boolRes);
//////Start with a
boolRes=fruits.some((item)=>item.startsWith("a"));
console.log(boolRes);
///////Filter
var filtered=fruits.filter(item=>item.startsWith("b")||item.startsWith("s") );
console.log(filtered);

////////REDUCE///////
let newArr=[];
fruits.reduce(function(pre,cur)
{
    pre="I like ";
    console.log(pre,cur);
    newArr.push(pre+cur);
    return pre
}
)

///FOR EACH
console.log("-----")
newArr.forEach(item=>console.log(item))
//-----------///
async function getProducts(){
    let res= await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
    let data= await res.json();
    var row= document.createElement("div");

        row.setAttribute("id","row");
        row.setAttribute("border","black 2px sloid");
        row.setAttribute("style","display:flex; flex-wrap:wrap;")
        for(var i=0;i<data.length;i++)
        {
             
            var imgDiv=document.createElement("div");
            imgDiv.setAttribute("class","imgDiv")
            var img = document.createElement("img");
            img.src=data[i].image;
            img.setAttribute("width","40%");

            var price=document.createElement("h4");
            price.innerHTML=data[i].price;

            var name=document.createElement("h4");
            name.innerHTML=data[i].name;
            imgDiv.appendChild(name);
            imgDiv.appendChild(price);
            imgDiv.appendChild(img);
            row.appendChild(imgDiv); 
            
        }
        document.body.appendChild(row);
}
 getProducts();
