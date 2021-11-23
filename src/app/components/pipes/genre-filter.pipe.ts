import { Genre } from './../../model/interfaces/movie.interface';
import { Movie } from './../../model/interfaces/movies-popular.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(movies: Movie[], genres: Genre[]): Movie[] {
    if(!genres || genres.length == 0)
      return movies;

    return movies.filter(function(movie) {
      for(const genre of genres) {
        if(movie.genre_ids.includes(genre.id))
          return true;
      }
      return false;
    });

  }

}
