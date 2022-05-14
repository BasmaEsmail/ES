class Shape{
    constructor(name,color){
        this.name=name;
        this.color=color
    }
}
class Square extends Shape
{
    constructor(name,color,len)
    {
        super(name,color);
        this.l=len
    }
     area= function(){

        return Math.pow(this.l,2);
    }
    per=function(){
        return this.l*4;
    }
    display(){
        console.log (`name: ${this.name} color: ${this.color} Area: ${this.area()} Per: ${this.per()} `)
    }
}
class Rect extends Shape{
    static count=0;

    constructor(name,color,h,w)
    {
        super(name,color)
        this.h=h;
        this.w=w;
        Rect.incr();
        
    }
    static incr=function () {
        return this.count++;
      }
   
     area= function(){

        return this.h*this.w;
    }
    per=function(){
        return (this.h+this.w)*2;
    }
    display(){
        console.log (`name: ${this.name} color: ${this.color} Area: ${this.area()} Per: ${this.per()} `)
    }

    }

let Sq= new Square("Sqr1","green",3)
Sq.display()
let Rec= new Rect("Rec1","red",2,3)
Rec.display()
let Rec2= new Rect("Rec2","yellow",4,3)
Rec2.display()
console.log(Rect.incr());