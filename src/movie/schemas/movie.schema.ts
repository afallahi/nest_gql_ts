import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type MovieDocument = Movie & Document;

@ObjectType()
@Schema()
export class Movie {
  @Field(() => String)
  @Prop()
  title: string;

  @Field(() => String)
  @Prop()
  description: string;

  @Field(() => String)
  @Prop()
  director: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
