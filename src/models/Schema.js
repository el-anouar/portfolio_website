import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    Hero: {image:{type:String},title:{type:String},desc:{type:String},buttTitle:{type:String},buttLink:{type:String}},
    Skills: {coding:{icons:[{}]},services:{type: [String]},languages:{type: [String]}},
    projects: [{
      title: { type: String, required: true },
      image: { type: String, required: true },
      desc: { type: String, required: true },
      tags: [{ type: String, required: true }],
      editordata: { type: Object, required: true }
    }],
    aboutme: {text:{type:String}}
  },
  /*{ timestamps: true }*/
);

export default mongoose.models.Schema || mongoose.model("Schema", Schema);
