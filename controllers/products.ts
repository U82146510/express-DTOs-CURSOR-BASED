import { type Request,type Response,type NextFunction } from "express";
import { Product } from "../models/products";
import {Product_body,Product_params} from '../middleware/dtos';


export const add_product = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    const product = new Product_body(req.body);
    if(!product.name||!product.price||!product.quantity){
        res.status(400).json({message:'missing name | price | quantity'});
        return;
    }
    try {
        const if_product_exists = await Product.findOne({name:product.name});
        if(if_product_exists){
            res.status(409).json({message:'dublicate'});
            return;
        }
        const add_products = await Product.create({name:product.name,price:product.price,quantity:product.quantity});
        res.status(201).json({success:true, product_id:add_products.id});
    } catch (error) {
        next(error)
    }
};

export const get_product = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    const {limit,cursor} = req.query as {limit:string;cursor:string}
    const product = new Product_params({limit,cursor});

    const page = parseInt(product.limit as string);
    const id = product.cursor as string|undefined;
    let query:any={};

    if(id){
        query._id = {$gt:id};
    }
    try {
        const find_product = await Product.find(query).sort({_id:1}).limit(page);
        const next_cursor = find_product.length > 0 ? find_product[find_product.length-1].id : null; 
        res.status(200).json({success:true,product:find_product,cursor:next_cursor});
    } catch (error) {
        next(error);
    }
};

export const get_products = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const find_products = await Product.find({});
        if(!find_products){
            res.status(404).json({message:'not found'});
            return;
        }
        res.status(200).json({success:true,product:find_products});
    } catch (error) {
        next(error);
    }
};