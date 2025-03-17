export class Product_body {
    public name:string;
    public price:number;
    public quantity:number;
    constructor(product:{name:string,price:number,quantity:number}){
        this.name = product.name;
        this.price = product.price;
        this.quantity = product.quantity;
    }
};

export class Product_params {
    public cursor:string;
    public limit:string;
    constructor(product:{limit:string,cursor:string}){
        this.limit = product.limit;
        this.cursor = product.cursor;
    }
};