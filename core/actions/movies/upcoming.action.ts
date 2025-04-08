import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mapers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const upcomingMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming", {
      params: {
        page: page,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    console.log(movies);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now upcoming movies";
  }
};
