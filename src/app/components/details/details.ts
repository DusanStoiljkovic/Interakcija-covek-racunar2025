import { Component, signal } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [RouterLink, DatePipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  protected movie = signal<MovieModel>({} as MovieModel);
  protected movieName = '';

  constructor(private route: ActivatedRoute) {
    this.findMovie(this.route.snapshot.params['shortUrl']);
  } 

  findMovie(movieName: string) {
    MovieService.getAllMovies(movieName).then((response) => this.movie.set(response.data[0]));
    console.log(this.movie());
  }
}