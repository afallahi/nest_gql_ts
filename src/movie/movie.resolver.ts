import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Movie } from './schemas/movie.schema';
import { MovieService } from './movie.service';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { Schema as MongooSchema } from 'mongoose';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Mutation(() => Movie)
  createMovie(@Args('createMovieInput') createMovieInput: CreateMovieInput) {
    return this.movieService.createMovie(createMovieInput);
  }

  @Mutation(() => Movie)
  updateMovie(@Args('updateMovieInput') updateMovieInput: UpdateMovieInput) {
    return this.movieService.updateMovie(
      updateMovieInput._id,
      updateMovieInput,
    );
  }

  @Mutation(() => Movie)
  deleteMovie(
    @Args('id', { type: () => String }) id: MongooSchema.Types.ObjectId,
  ) {
    return this.movieService.deleteMovie(id);
  }

  @Query(() => [Movie], { name: 'movies' })
  findAllMovies() {
    return this.movieService.findAllMovies();
  }

  @Query(() => Movie, { name: 'movie' })
  findMovie(
    @Args('id', { type: () => String }) id: MongooSchema.Types.ObjectId,
  ) {
    return this.movieService.findMoviesById(id);
  }
}
