import { Injectable } from '@angular/core';
import { Tweet } from './tweet.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  private tweets: Tweet[] = [];
  private tweetsUpdated = new Subject<Tweet[]>();

  constructor(private http: HttpClient) {}

  getTweets() {
    this.http
      .get<{ message: string; tweets: Tweet[] }>('http://localhost:3000/tweets')
      .subscribe((tweetsData) => {
        this.tweets = tweetsData.tweets;
        this.tweetsUpdated.next([...this.tweets]);
      });
  }

  getTweetUpdateListener() {
    return this.tweetsUpdated.asObservable();
  }

  addTweet(message: string) {
    const tweet: Tweet = { id: null, message };
    this.tweets.push(tweet);
    this.tweetsUpdated.next([...this.tweets]);
  }
}
