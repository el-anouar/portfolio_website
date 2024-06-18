import mongoose from "mongoose";

const CreateUserSchema = new mongoose.Schema(
  {
    email: {type:String, required: true},
    password: {type:String, required: true},
    phonenumber: {type:Number, required: true},
    securetok: {type:String, required: true},
    admin:{type:Boolean,required:true},
    token:{type:String}
  },
  /*{ timestamps: true }*/
);

export default mongoose.models.CreateUserSchema || mongoose.model("CreateUserSchema", CreateUserSchema);