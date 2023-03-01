import mongoose from "mongoose";
import validator from 'validator';



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Email invalid");
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:5
        
    }
});

const Schema = new mongoose.model('Schema',userSchema);

export default Schema;