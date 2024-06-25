import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GamesComponent } from "./games/games.component";
import { GaleryComponent } from "./galery/galery.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserComponent, GamesComponent, GaleryComponent]
})
export class AppComponent {
  title = 'tutorial-angular';
  city = "Barcelona";
}
