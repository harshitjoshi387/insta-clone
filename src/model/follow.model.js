const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({
follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"follower is required"]
},

followee:{
    type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"follower is required"]
        
}
},{
    timestamps:true
}


)

const followModel = mongoose.Model("follow",followSchema)

module.exports = followModel