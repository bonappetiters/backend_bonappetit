/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import { Ingredient } from 'src/ingredients/schema/ingredient.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({type: Types.ObjectId, required: true })
  _id: Types.ObjectId;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, match: /.+\@.+\..+/ })
  email: string;

  @Prop()
  shopping_list: Array<Ingredient>;

  @Prop()
  favourites: string;


}

export const UserSchema = SchemaFactory.createForClass(User);
