import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsStrongPassword,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @MinLength(3)
  firstname: string;

  @Field(() => String)
  @MinLength(3)
  lastname: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String)
  @MinLength(3)
  address: string;

  @Field(() => String)
  @IsStrongPassword({
    minLength: 4,
    minLowercase: 1,
    minNumbers: 1,
    minUppercase: 1,
  })
  password: string;
}
