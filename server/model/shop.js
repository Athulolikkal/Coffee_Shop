import mongoose from "mongoose";
const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    miles: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    review: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: true,
    }

})

const model = mongoose.model('Shops', shopSchema);
export default model;