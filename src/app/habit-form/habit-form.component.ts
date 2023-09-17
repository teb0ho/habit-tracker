import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.css'],
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
