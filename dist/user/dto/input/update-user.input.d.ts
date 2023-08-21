import { Schema as MongooSchema } from 'mongoose';
import { CreateUserInput } from './create-user.input';
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<CreateUserInput>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
    _id: MongooSchema.Types.ObjectId;
}
export {};
