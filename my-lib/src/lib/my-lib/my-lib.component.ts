import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-lib.component.html',
  styleUrl: './my-lib.component.css',
  encapsulation:ViewEncapsulation.None
})
export class MyLibComponent {}
