const mongoose=require('mongoose')


//const uri = "mongodb+srv://stutibhadauria28:stuti@123@cluster0.8k3gbi1.mongodb.net/blogWebsite?retryWrites=true&w=majority"
const uri ="mongodb+srv://admission123:12345678V@cluster0.b0ibf.mongodb.net/blog123?retryWrites=true&w=majority"

const connectdb=()=>{
    // return mongoose.connect('mongodb://0.0.0.0:27017/blogWebsite')
    return mongoose.connect(uri)
    .then(()=>{
       console.log('connection succcessfully!!')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectdb
//vikas1234