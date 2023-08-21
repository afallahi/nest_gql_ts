import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  @Prop()
  firstname: string;

  @Field(() => String)
  @Prop()
  lastname: string;

  @Field(() => String)
  @Prop()
  email: string;

  @Field(() => String)
  @Prop()
  address: string;

  @Field(() => String)
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
