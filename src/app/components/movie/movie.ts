import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from "../header/header";
import { Rating } from "../rating/rating";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.html',
  styleUrls: ['./movie.css'],
  imports: [CommonModule,FormsModule, Header, Rating],
})
export class Movie implements OnInit{
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  username: string = '';
  reviewText: string = '';
  userRating: number = 0;

  constructor(private route: ActivatedRoute, private http:HttpClient){ }
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/data/popular-movies.json';
    }
    this.getMovie();
  }
  getMovie(){
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie : { id: string}) => movie.id == this.id
      );
      if(index > -1){
        this.movie = this.movies[index];
      }
    });
  }

  setRating(rating:number){
  this.userRating = rating;
}

submitReviews(){
  if(!this.username || !this.userRating || !this.reviewText){
    alert("Please fill out all fields and select a rating!");
    return;
  }

  const newReview = {
    author : this.username,
    rating : this.userRating,
    text : this.reviewText,
    published_on : new Date()
  };

  this.movie.reviews.push(newReview)

  this.username = "";
  this.userRating = 0;
  this.reviewText = '';
}

}

