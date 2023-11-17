import { Component, Input } from '@angular/core';
import { Habit } from '../shared/models/habit.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() items: Habit[] = [];
}
