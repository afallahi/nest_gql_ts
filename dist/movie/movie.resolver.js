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
exports.MovieResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const movie_schema_1 = require("./schemas/movie.schema");
const movie_service_1 = require("./movie.service");
const create_movie_input_1 = require("./dto/create-movie.input");
const update_movie_input_1 = require("./dto/update-movie.input");
const mongoose_1 = require("mongoose");
let MovieResolver = exports.MovieResolver = class MovieResolver {
    constructor(movieService) {
        this.movieService = movieService;
    }
    createMovie(createMovieInput) {
        return this.movieService.createMovie(createMovieInput);
    }
    updateMovie(updateMovieInput) {
        return this.movieService.updateMovie(updateMovieInput._id, updateMovieInput);
    }
    deleteMovie(id) {
        return this.movieService.deleteMovie(id);
    }
    findAllMovies() {
        return this.movieService.findAllMovies();
    }
    findMovie(id) {
        return this.movieService.findMoviesById(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => movie_schema_1.Movie),
    __param(0, (0, graphql_1.Args)('createMovieInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_input_1.CreateMovieInput]),
    __metadata("design:returntype", void 0)
], MovieResolver.prototype, "createMovie", null);
__decorate([
    (0, graphql_1.Mutation)(() => movie_schema_1.Movie),
    __param(0, (0, graphql_1.Args)('updateMovieInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_movie_input_1.UpdateMovieInput]),
    __metadata("design:returntype", void 0)
], MovieResolver.prototype, "updateMovie", null);
__decorate([
    (0, graphql_1.Mutation)(() => movie_schema_1.Movie),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", void 0)
], MovieResolver.prototype, "deleteMovie", null);
__decorate([
    (0, graphql_1.Query)(() => [movie_schema_1.Movie], { name: 'movies' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieResolver.prototype, "findAllMovies", null);
__decorate([
    (0, graphql_1.Query)(() => movie_schema_1.Movie, { name: 'movie' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", void 0)
], MovieResolver.prototype, "findMovie", null);
exports.MovieResolver = MovieResolver = __decorate([
    (0, graphql_1.Resolver)(() => movie_schema_1.Movie),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieResolver);
//# sourceMappingURL=movie.resolver.js.map