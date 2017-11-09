import { IFavouritetEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Demo';

  post = {
    isActive: true
  }

  tweet = {
    isLiked: false,
    likesCount: 10
  }

  onFavouriteChanged(eventArgs: IFavouritetEventArgs) {
    console.log(eventArgs.value);
  }
}
