import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActInputDirective} from "../act-input/act-input.directive";
import {ActButtonDirective} from "../act-button/act-button.directive";

@Component({
  selector: 'act-card',
  standalone: true,
  imports: [CommonModule, ActInputDirective, ActButtonDirective],
  templateUrl: './act-card.component.html',
  styleUrl: './act-card.component.css',
})
export class ActCardComponent {}
