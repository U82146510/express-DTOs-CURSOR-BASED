import { Router } from "express";
import{add_product,get_product,get_products} from '../controllers/products';

export const product:Router = Router();

product.post('/add',add_product);
product.get('/get',get_product);
product.get('/get_all',get_products);