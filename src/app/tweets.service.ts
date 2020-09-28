import { Injectable } from '@angular/core';
import { Tweet } from './tweet.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  private tweets: Tweet[] = [{ message: 'hi there' }, { message: 'bye there' }];
  private tweetsUpdated = new Subject<Tweet[]>();

  getTweets() {
    return [...this.tweets];
  }

  getTweetUpdateListener() {
    return this.tweetsUpdated.asObservable();
  }

  addTweet(tweet: Tweet) {
    this.tweets.push(tweet);
    this.tweetsUpdated.next([...this.tweets]);
  }
}
