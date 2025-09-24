import { Component, OnInit } from '@angular/core';
import { Header } from "../header/header";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Rating } from "../rating/rating";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, FormsModule, CommonModule, Rating],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http : HttpClient , private router:Router) {  }
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }
  getTrendingMovies(){
    this.http.get("http://localhost:4200/data/trending-movies.json").subscribe((movies) =>{
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    })
  }

    getTheatreMovies() {
    this.http
      .get('http://localhost:4200/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }

  getPopularMovies() {
    this.http
      .get('http://localhost:4200/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

}

