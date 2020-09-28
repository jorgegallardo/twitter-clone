import { Injectable } from '@angular/core';
import { Tweet } from './tweet.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  private tweets: Tweet[] = [];
  private tweetsUpdated = new Subject<Tweet[]>();

  constructor(private http: HttpClient) {}

  getTweets() {
    this.http
      .get<{ message: string; tweets: any }>('http://localhost:3000/tweets')
      .pipe(
        map((tweetData) => {
          return tweetData.tweets.map((tweet) => {
            return { id: tweet._id, message: tweet.message };
          });
        })
      )
      .subscribe((transformedTweets) => {
        this.tweets = transformedTweets;
        this.tweetsUpdated.next([...this.tweets]);
      });
  }

  getTweetUpdateListener() {
    return this.tweetsUpdated.asObservable();
  }

  addTweet(message: string) {
    const tweet: Tweet = { id: null, message };
    this.http
      .post<{ message: string }>('http://localhost:3000/tweets', tweet)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.tweets.push(tweet);
        this.tweetsUpdated.next([...this.tweets]);
      });
  }

  deleteTweet(tweetId: string) {
    this.http
      .delete(`http://localhost:3000/tweets/${tweetId}`)
      .subscribe(() => {
        console.log('Deleted!');
      });
  }
}
