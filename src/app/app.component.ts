import { Component, OnInit } from '@angular/core';
import { HabitService } from './habit.service';
import { Habit } from './shared/models/habit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'habit-tracker';
  habits: Habit[] = [];

  constructor(private habitsService: HabitService) {}

  ngOnInit() {
    this.habitsService
      .getHabits()
      .subscribe((habits) => (this.habits = habits));
  }

  addHabit(habit: string) {
    this.habitsService.addHabit(habit).subscribe((h) => {
      this.habits.push(h);
    });
  }
}
