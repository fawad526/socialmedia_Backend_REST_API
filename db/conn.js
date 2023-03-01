import mongoose from 'mongoose';

const CONNECTION_URL='mongodb+srv://fawad_iqbal_21:123321@cluster0.rpqikpu.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Mongodb is connected"))
.catch((error)=>console.log(error.message));
