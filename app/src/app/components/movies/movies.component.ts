import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  listmovies;
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList() {
    this.movieService.getApi()
      .subscribe( (response) => {
        console.log(response);
        this.listmovies = response['movies'];
      }, error => {
        console.log('Ups, Hay un error: ', error);
      });
  }

}
