import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tweet } from './tweet.model';
import { TweetsService } from './tweets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  tweets: Tweet[];
  private tweetsSub: Subscription;

  constructor(private tweetsService: TweetsService) {}

  ngOnInit() {
    this.tweetsService.getTweets();
    this.tweetsSub = this.tweetsService
      .getTweetUpdateListener()
      .subscribe((tweets: Tweet[]) => {
        this.tweets = tweets;
      });
  }

  onSubmitTweet(form: NgForm) {
    this.tweetsService.addTweet(form.value.tweet);
    form.resetForm();
  }

  onDeleteTweet(tweetId: string) {
    this.tweetsService.deleteTweet(tweetId);
  }

  ngOnDestroy() {
    this.tweetsSub.unsubscribe();
  }
}
