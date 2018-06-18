import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // movie = '3 Idiots';

  movie: Movie = {
    id: 20453,
    name: '3 Idiots'
  };

  constructor() { }

  ngOnInit() {
  }

}
