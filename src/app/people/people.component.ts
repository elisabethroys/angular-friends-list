import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name: string = '';
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();

  addToFavs(f: string) {
    this.addFav.emit(f);
  }
}
