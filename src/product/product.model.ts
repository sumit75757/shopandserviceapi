import  mongoos  from "mongoose";
const product = new mongoos.Schema({
    _id: mongoos.Schema.Types.ObjectId,
    productName: {
        type: String,
        required: true
    },
    productInfo: {
        type: String,
        required: true
    },
    sellerId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    catogory: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
    },
    discrption: {
        type: String,
    },
    createAt: String
})
export default mongoos.model('product', product)
