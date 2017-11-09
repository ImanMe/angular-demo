import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isLiked') isLiked: boolean;
  @Input('likesCount') likesCount: number;

  onClickOfHeart() {
    this.isLiked = !this.isLiked;
    this.likesCount = this.isLiked ? this.likesCount + 1 : this.likesCount - 1;
  }
}
