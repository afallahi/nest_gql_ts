import { CreateMovieInput } from './create-movie.input';
import { Schema as MongooSchema } from 'mongoose';
declare const UpdateMovieInput_base: import("@nestjs/common").Type<Partial<CreateMovieInput>>;
export declare class UpdateMovieInput extends UpdateMovieInput_base {
    _id: MongooSchema.Types.ObjectId;
}
export {};
