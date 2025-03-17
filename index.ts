import express,{ type Application } from "express";
import {connect_to_db,disconnect_atlas} from './config/atlas';
import {error_handler} from './error/error_handler';
import {product} from './routes/products';

const app:Application = express();
const port:number = 3000;
app.use(express.json({limit:"2mb",strict:true}));
app.use('/',product);

app.use(error_handler);
const start = async()=>{
    try {
        await connect_to_db();
        app.listen(port,()=>console.log("ON"));

        process.on("SIGINT",async()=>{
            console.info("shouting down");
            await disconnect_atlas();
            process.exit(0);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();