import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favs: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFav(friend: string): void {
    console.log(friend);
    if (this.favs.indexOf(friend) === -1) {
      this.favs.push(friend);
    }
  }

  isinFav(friend: string) {
    if (this.favs.indexOf(friend) === -1) {
      return false;
    }
    return true;
  }
}
