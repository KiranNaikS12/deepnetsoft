import mongoose, { Schema } from 'mongoose';
import { IMenuItems } from 'types/menuItems';

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu',
  },
});

const MenuItem = mongoose.model<IMenuItems>('MenuItem', menuItemSchema);
export default MenuItem;