import { MongooseModule } from '@nestjs/mongoose';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';
import { Movie, MovieSchema } from './schemas/movie.schema';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  providers: [MovieResolver, MovieService],
})
export class MovieModule {}
