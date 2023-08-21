import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';
import { CreateMovieInput } from './create-movie.input';
import { Schema as MongooSchema } from 'mongoose';

@InputType()
export class UpdateMovieInput extends PartialType(CreateMovieInput) {
  @Field(() => String)
  @IsMongoId()
  _id: MongooSchema.Types.ObjectId;
}
