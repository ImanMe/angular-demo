import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  @Input('isActive') isActive: boolean;
  @Output() change = new EventEmitter();

  onClick() {
    this.isActive = !this.isActive;
    this.change.emit({ value: this.isActive });
  }
}

export interface IFavouritetEventArgs {
  value: boolean
}