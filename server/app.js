import express, { urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import shopController from './controllers/shop_details/shop.js';
import connectDB from './database/db.js';

const app = express();
app.use(express.json())
app.use(urlencoded({ extends: true }))
app.use(morgan("dev"));
app.use(cors());

//if we have more routes create route group
app.get('/allshops', shopController.getAllShops);
app.get('/shopmenu/:id', shopController.getShopItems);
app.get('/search', shopController.searchDetails)

app.listen(3000, () => {
    console.log('port running on 3000');
})
connectDB()
export default app;