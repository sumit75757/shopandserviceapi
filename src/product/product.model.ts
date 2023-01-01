import mongoos from "mongoose";
const product = new mongoos.Schema({
  _id: mongoos.Schema.Types.ObjectId,
  productName: {
    type: String,
    required: true,
  },
  productInfo: {
    type: String,
    required: true,
  },
  sellerId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  catogory: {
    type: String,
    required: true,
  },
  inStock:{
   type: Boolean,
    required: true
  },
  productImage: {
    type: Array,
  },
  discrption: {
    type: String,
  },
  subCatogory:{
    type: String,
    required: true
  },
  onhome: {
    type: Boolean,
    required: false
  },
  createAt: String,
});
export default mongoos.model("product", product);
