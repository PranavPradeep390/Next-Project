
interface Product {
    id:number;
    name:string;
    price:number;
    description:string;
}



export const products:Product[] = [
    {   id:0,
        name:"iphone",
        price:100000,
        description:"iphone 12"
    }, {   id:1,
        name:"pixel",
        price:80000,
        description:"Google pixel 8"
    }
]
