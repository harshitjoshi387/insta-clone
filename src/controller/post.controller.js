const postModel =require("../model/post.model")
const ImageKit =require("@imagekit/nodejs")
const {toFile} = require("@imageKit/nodejs")

const ImageKit = Imagekit({
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




module.exports=createPostController