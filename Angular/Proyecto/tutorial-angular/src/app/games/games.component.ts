import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h4>The favorites games of {{ username }}</h4>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="setFav(game.name)">{{ game.name}}</li>
      }
    </ul>
  `,
  styles: `
  
  `
})
export class GamesComponent {
  @Input() username = "";
  @Output() addFavoriteGameEvent = new EventEmitter<string>();

  setFav(name: string) {
    this.addFavoriteGameEvent.emit(name);
  }

  games = [
    {
      id: 1,
      name: "Dark Soul 1"
    },
    {
      id: 2,
      name: "Sekiro Shadow Twice"
    },
    {
      id: 3,
      name: "Bloodborne"
    },
    {
      id: 4,
      name: "Elden Ring"
    }
  ]
}
