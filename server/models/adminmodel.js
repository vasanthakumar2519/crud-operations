const {Schema,model} = require('mongoose')

const adminSchema = new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})


module.exports = model("Admin",adminSchema)