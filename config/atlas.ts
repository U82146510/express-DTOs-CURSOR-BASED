import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const atlas = process.env.ATLAS;
if(!atlas){
    throw new Error("missing atlas connection string");
};

export const connect_to_db = async()=>{
    try {
        await mongoose.connect(atlas,{
            serverSelectionTimeoutMS:5000
        });
        console.info("initial connection successfully")
    } catch (error) {
        console.error(error);
        throw error
    }
};


const db:mongoose.Connection=mongoose.connection;
db.on("error",async(err)=>{
    console.error(err);
});
db.on("connected",()=>{
    console.info("atlas connected");
});
db.on("disconnected",async()=>{
    console.info("disconnected,reconnecting to atlas...")
    setTimeout(async()=>await connect_to_db(),10000)
});


export const disconnect_atlas  = async()=>{
    try {
        console.info("close atlas connection");
        await mongoose.disconnect()
    } catch (error) {
        console.error(error);
    }
};