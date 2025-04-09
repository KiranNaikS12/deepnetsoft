import mongoose from "mongoose";

export interface IMenuItems extends Document {
    name: string;
    description: string;
    price: number;
    menu: mongoose.Types.ObjectId
}