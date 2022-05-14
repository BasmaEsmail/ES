function *generator(n)
{
    let x= 0;
    let y= 1;
    yield x;
    yield y;
    for(let i =2;i<n;i++)
    {
        let num=x+y;
        yield num
        x=y; 
        y=num;
    }
}

let g=generator(8)

