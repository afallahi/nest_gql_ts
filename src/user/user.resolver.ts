import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { UsersService } from './user.service';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './schemas/user.schema';
import { Schema as MongooSchema } from 'mongoose';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.updateUser(updateUserInput._id, updateUserInput);
  }

  @Mutation(() => User)
  deleteUser(@Args('id', { type: () => Int }) id: MongooSchema.Types.ObjectId) {
    return this.usersService.deleteUser(id);
  }

  @Query(() => User, { name: 'userById' })
  getUserById(
    @Args('id', { type: () => String }) id: MongooSchema.Types.ObjectId,
  ) {
    return this.usersService.getUserById(id);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }
}
