import { Document, Types } from 'mongoose';
import { IMenuItems } from './menuItems';

export interface IMenu extends Document {
   name: string;
   description: string;
   items: Types.ObjectId[] | IMenuItems[]
}