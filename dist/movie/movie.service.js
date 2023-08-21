"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const movie_schema_1 = require("./schemas/movie.schema");
const mongoose_2 = require("mongoose");
let MovieService = exports.MovieService = class MovieService {
    constructor(movieModel) {
        this.movieModel = movieModel;
    }
    createMovie(createMovieInput) {
        const createMovie = new this.movieModel(createMovieInput);
        return createMovie.save();
    }
    updateMovie(id, updateMovieInput) {
        return this.movieModel.findByIdAndUpdate(id, updateMovieInput);
    }
    deleteMovie(id) {
        return this.movieModel.deleteOne({ _id: id });
    }
    async findAllMovies() {
        const moviesCount = await this.movieModel.countDocuments();
        const movies = await this.movieModel.find();
        return { movies, moviesCount };
    }
    findMoviesById(id) {
        return this.movieModel.findById(id);
    }
};
exports.MovieService = MovieService = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(movie_schema_1.Movie.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MovieService);
//# sourceMappingURL=movie.service.js.map