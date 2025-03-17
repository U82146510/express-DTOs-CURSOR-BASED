import mongoose,{type Document,model,Schema} from "mongoose";

interface IProducts extends Document{
    name:string;
    price:number;
    quantity:number;
};

const product_schema = new Schema<IProducts>({
    name:{type:String,required:true,unique:true},
    price:{type:Number,required:true,default:()=>0},
    quantity:{type:Number,required:true,default:()=>0}
});

export const Product = model("Product",product_schema);