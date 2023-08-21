/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Movie } from './schemas/movie.schema';
import { MovieService } from './movie.service';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { Schema as MongooSchema } from 'mongoose';
export declare class MovieResolver {
    private readonly movieService;
    constructor(movieService: MovieService);
    createMovie(createMovieInput: CreateMovieInput): Promise<import("mongoose").Document<unknown, {}, import("./schemas/movie.schema").MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateMovie(updateMovieInput: UpdateMovieInput): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/movie.schema").MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./schemas/movie.schema").MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/movie.schema").MovieDocument, "findOneAndUpdate">;
    deleteMovie(id: MongooSchema.Types.ObjectId): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./schemas/movie.schema").MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/movie.schema").MovieDocument, "deleteOne">;
    findAllMovies(): Promise<{
        movies: (import("mongoose").Document<unknown, {}, import("./schemas/movie.schema").MovieDocument> & Movie & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        moviesCount: number;
    }>;
    findMovie(id: MongooSchema.Types.ObjectId): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/movie.schema").MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./schemas/movie.schema").MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/movie.schema").MovieDocument, "findOne">;
}
