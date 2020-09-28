import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tweet } from './tweet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tweets: Tweet[] = [{ message: 'hi there' }, { message: 'bye there' }];

  onSubmitTweet(form: NgForm) {
    this.tweets.push({ message: form.value.tweet });
  }
}
