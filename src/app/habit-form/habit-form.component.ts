import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrl: './habit-form.component.css',
})
export class HabitFormComponent {
  habitForm;
  @Output() habit = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = formBuilder.group({
      name: '',
    });
  }

  addHabit(newHabit: any) {
    this.habit.emit(newHabit['name']);
    this.habitForm.reset();
  }
}
