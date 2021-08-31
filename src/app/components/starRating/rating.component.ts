import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class Rating {
  @Input() star_Rating: number;
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  show() {
    //  alert("you are here");
    this.notify.emit('This is a product with star rating: ' + this.star_Rating);
  }
}
