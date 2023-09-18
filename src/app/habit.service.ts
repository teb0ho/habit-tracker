import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Habit } from './shared/models/habit.model';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  baseUrl = 'http://localhost:3000/habits';
  constructor(private http: HttpClient) {}

  getHabits() {
    return this.http.get<Habit[]>(this.baseUrl);
  }

  addHabit(name: string) {
    return this.http.post<Habit>(this.baseUrl, { name });
  }
}
