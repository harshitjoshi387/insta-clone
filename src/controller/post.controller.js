const postModel =require("../model/post.model")
const ImageKit =require("@imagekit/nodejs")
const {toFile} = require("@imageKit/nodejs")

const ImageKit = new Imagekit({
    privateKey:process.env.IMAGEKIT_PRIVATEKEY
})

async function createPostController(req,res){
    console.log(req.body,req.file)
    const file = await ImageKit.files.upload({
    file:await toFile(Buffer.from(req.file.buffer),'file'),
    fileName:"Test"
})
res.send(file)
}

async function getPostController(req,res){
    const token = req.cookies.token

     if(!token){
        return res.status(401).json({
            message:"UnAuthorized Access"
        })
    }

    let decoded;
try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
}catch(err){
        return res.status (401).json({
            message:"Token invalid"
        })
}

const userId = decoded.id

const posts= await postModel.find ({
     user:userId
})

res.status(200).json({
    message:"posts fetched sucessfully.",
    posts
})


   
}

async function getPostDetailsController(req,res){

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"UnAuthorized Access"
        })
    }
    let decoded
    try{

        decoded = jwt.verify(token,process.env.JWT_SECRECT)

    }catch(err){
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
     const userId = decoded.id
     const postId= req.params.postId


     const post= await postModel.findById(postId)

     if(post){
        return res.status(404).json({
            message:"Post not found"
        })
     }

     const isValidUser = post.user===userId

     if(!isValidUser){
        return res.status(403).json({
            message:"Forbidden Content"
        })
     }
     return res.status(200).json({
        message:"Post fetched successfully",
        post
     })
}


module.exports={
    createPostController,
    getPostController,
    getPostDetailsController
}