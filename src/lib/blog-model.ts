import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  description: string;
  content: string;
  image: string;
  author : string;
  authorDesc : string;
  createdAt: Date;
}

const BlogSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  author : {type:String , required: true},
  authorDesc : {type:String , required: true},
  createdAt: { type: Date, default: Date.now },
});

export default models.Blog || model<IBlog>('Blog', BlogSchema);
