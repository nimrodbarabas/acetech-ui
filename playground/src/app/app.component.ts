import {Component, inject, OnInit, Renderer2} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ActButtonDirective, ActCardComponent, ActInputDirective, MyLibComponent} from "acetech-ui";
import {DOCUMENT} from "@angular/common";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MyLibComponent, ActButtonDirective, ActInputDirective, ActCardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'playground';

  private readonly renderer = inject(Renderer2)
  private readonly document = inject(DOCUMENT)

  ngOnInit() {
    this.renderer.addClass(this.document.documentElement, "light");
  }
}
