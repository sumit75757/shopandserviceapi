import mongooss, { Schema } from 'mongoose'
const authSchema = new mongooss.Schema({
  _id: mongooss.Schema.Types.ObjectId,
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userImage: { type: String, required: false },
  phone: { type: Number, required: false },
  address: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  zip: { type: Number, required: false },
  age: { type: Number, required: false },
  zender: { type: String, required: false },
  character: { type: String, required: true },
  satate: { type: Boolean, required: false  },
  crreatAt: { type: String, required: true },
  lastLogin: { type: String },
});
authSchema.index({ "$**": "text" });
export default mongooss.model('auth', authSchema )