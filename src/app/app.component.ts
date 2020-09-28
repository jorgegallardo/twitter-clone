import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tweet } from './tweet.model';
import { TweetsService } from './tweets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tweets: Tweet[];

  constructor(private tweetsService: TweetsService) {}

  ngOnInit() {
    this.tweets = this.tweetsService.getTweets();
  }

  onSubmitTweet(form: NgForm) {
    this.tweets.push({ message: form.value.tweet });
  }
}
