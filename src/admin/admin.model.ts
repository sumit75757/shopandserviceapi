import mongooss from 'mongoose'
const  admin = new mongooss.Schema({
    _id: mongooss.Schema.Types.ObjectId,
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    character:{ type: String, required: true },
    crreatAt: { type: String, required: true },
    lastLogin: { type: String }
})
export default mongooss.model('admin', admin )