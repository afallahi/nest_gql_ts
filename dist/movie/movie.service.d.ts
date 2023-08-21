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
import { Movie, MovieDocument } from './schemas/movie.schema';
import { Model, Schema as MongooSchema } from 'mongoose';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
export declare class MovieService {
    private movieModel;
    constructor(movieModel: Model<MovieDocument>);
    createMovie(createMovieInput: CreateMovieInput): Promise<import("mongoose").Document<unknown, {}, MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateMovie(id: MongooSchema.Types.ObjectId, updateMovieInput: UpdateMovieInput): import("mongoose").Query<import("mongoose").Document<unknown, {}, MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MovieDocument, "findOneAndUpdate">;
    deleteMovie(id: MongooSchema.Types.ObjectId): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MovieDocument, "deleteOne">;
    findAllMovies(): Promise<{
        movies: (import("mongoose").Document<unknown, {}, MovieDocument> & Movie & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        moviesCount: number;
    }>;
    findMoviesById(id: MongooSchema.Types.ObjectId): import("mongoose").Query<import("mongoose").Document<unknown, {}, MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, MovieDocument> & Movie & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MovieDocument, "findOne">;
}
