import mongoose from "mongoose";
import shopSchema from './shop.js'

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shops',
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})

const model = mongoose.model('Menus', menuSchema);
export default model;