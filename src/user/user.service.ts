import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooSchema } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  createUser(createUserInput: CreateUserInput) {
    const newUser = new this.userModel(createUserInput);
    return newUser.save();
  }

  async updateUser(
    id: MongooSchema.Types.ObjectId,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserInput, { new: true });
  }

  async getUserById(id: MongooSchema.Types.ObjectId): Promise<User> {
    return this.userModel.findById(id);
  }

  deleteUser(id: MongooSchema.Types.ObjectId) {
    return this.userModel.deleteOne({ _id: id });
  }

  findAll() {
    return this.userModel.find().skip(0).limit(10);
  }
}
