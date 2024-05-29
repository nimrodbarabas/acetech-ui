import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ActButtonDirective, ActInputDirective, MyLibComponent} from "acetech-ui";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MyLibComponent, ActButtonDirective, ActInputDirective],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playground';
}
