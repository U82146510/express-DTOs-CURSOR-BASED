import { type Request,type Response,type NextFunction } from "express";

export const error_handler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.error(err.stack);
    if(err instanceof Error){
        res.status(500).json({error:err.message});
        return;
    }
    res.status(500).json({error:"internal server error"});
}