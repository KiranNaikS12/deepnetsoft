import mongoose, { Schema } from 'mongoose';
import { IMenu } from 'types/menu';


const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MenuItem',
    },
  ],
});

const menuModel = mongoose.model<IMenu>('Menu', menuSchema);
export default menuModel;