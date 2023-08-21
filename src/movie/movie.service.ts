import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { Model, Schema as MongooSchema } from 'mongoose';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';

export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  createMovie(createMovieInput: CreateMovieInput) {
    const createMovie = new this.movieModel(createMovieInput);
    return createMovie.save();
  }

  updateMovie(
    id: MongooSchema.Types.ObjectId,
    updateMovieInput: UpdateMovieInput,
  ) {
    return this.movieModel.findByIdAndUpdate(id, updateMovieInput);
  }

  deleteMovie(id: MongooSchema.Types.ObjectId) {
    return this.movieModel.deleteOne({ _id: id });
  }

  async findAllMovies() {
    const moviesCount = await this.movieModel.countDocuments();
    const movies = await this.movieModel.find();

    return { movies, moviesCount };
  }

  findMoviesById(id: MongooSchema.Types.ObjectId) {
    return this.movieModel.findById(id);
  }
}
