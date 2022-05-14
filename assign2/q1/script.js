let obj={
    userName:"Ahmed",
    age:25,
    address:"Aswan"
}
let handler={
    get:function(target,prop){
        if(!(prop in target))
            {
              console.log(`this prop ${prop} is not in obj`);
            }
        return target[prop]
        
    },
    set:function(target,prop,value){
        if(prop=="userName")
        {
            if(value.length>7)
            {
                //console.log(value);
                target[prop]=value;
            }
            else
           { //console.log(value);
            console.log("Must be more than 7");}
        }
        else if(prop=="age")
        {
            if (isFinite(value)&& value>25 && value<60)
            target[prop]=value;
            else 
            console.log("Enter a Valid Age")
        }
        else if(prop=="address")
        {
            if (!isFinite(value))
            target[prop]=value;
            else
            console.log("Enter a Valid Address")
        }
        else
        console.log(`this prop ${prop} is not in obj`);

    }
        
    }


let objProxy = new Proxy(obj,handler);
console.log(objProxy.userName)
objProxy.userName="Ghada";
objProxy.age="35";
objProxy.address="11";

console.log(objProxy)
