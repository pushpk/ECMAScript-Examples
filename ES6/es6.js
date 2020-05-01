function first (){
    let f1= "hi";
    function second (){
        console.log(f1);

    }

    return second;
}


const firstcall = first();
firstcall();

export class a {
    b = 9;

    c(){
        console.log(this.b);
    }
}


console.log(a)