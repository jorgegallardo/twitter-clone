import { Injectable } from '@angular/core';
import { Tweet } from './tweet.model';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  private tweets: Tweet[] = [{ message: 'hi there' }, { message: 'bye there' }];

  getTweets() {
    return [...this.tweets];
  }
}
