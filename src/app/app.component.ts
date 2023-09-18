import { Component, OnInit } from '@angular/core';
import { HabitService } from './habit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'habit-tracker';
  habits: string[] = [];

  constructor(private habitsService: HabitService) {}

  ngOnInit() {
    this.habitsService
      .getHabits()
      .subscribe((habits) => (this.habits = habits.map((b) => b.name)));
  }

  addHabit(habit: string) {
    this.habits.push(habit);
    this.habitsService.addHabit(habit).subscribe(() => {
      console.log('successfully added');
    });
  }
}
