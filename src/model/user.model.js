const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"usename already exist"],
        required:["username required"]
    },

    email:{
        type:String,
        unique:[true,"email already exists"],
        required:[true,"email is required"],
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    bio:{
        type:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/jben2nwj5/avatar-default-user-profile-icon-simple-flat-grey-vector-57234191.webp?updatedAt=1770825792747"
    }
    }

})

const userModel = mongoose.model("users",userSchema)

module.exports= userModel