import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {
  likesNumber : number = 0;
  dislikesNumber: number = 0;

  likeButtonClick(){
    this.likesNumber++;
  }
  dislikeButtonClick(){
    this.dislikesNumber++;
  }
  constructor() { }

  ngOnInit() {
  }

}