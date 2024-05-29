import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ActButtonDirective, ActCardComponent, ActInputDirective, MyLibComponent} from "acetech-ui";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MyLibComponent, ActButtonDirective, ActInputDirective, ActCardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playground';
}
