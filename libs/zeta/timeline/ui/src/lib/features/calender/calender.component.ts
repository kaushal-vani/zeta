import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dayNames } from './calender.component.helper';

@Component({
  selector: 'lib-calender',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})
export class CalenderComponent implements OnInit {
  currentMonth!: number;
  currentYear!: number;
  currentMonthName!: string;
  calendar: Date[][] = [];
  dayNames: string[] = dayNames;

  ngOnInit(): void {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.generateCalendar();
  }
  generateCalendar(): void {
    this.calendar = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    // const daysInMonth = lastDay.getDate();

    let date = new Date(firstDay);

    while (date <= lastDay) {
      const week: Date[] = [];

      for (let i = 0; i < 7; i++) {
        if (date.getMonth() === this.currentMonth) {
          week.push(new Date(date));
        } else {
          week.push(null as unknown as Date);
        }
        date.setDate(date.getDate() + 1);
      }
      this.calendar.push(week);
    }

    this.currentMonthName = firstDay.toLocaleString('default', {
      month: 'long'
    });
  }
  isCurrentDay(day: Date): boolean {
    const today = new Date();
    return day && day.toDateString() === today.toDateString();
  }
  isActive(day: Date): boolean {
    const today = new Date();
    const lastDateToSelect = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );
    if (day && day >= today && day <= lastDateToSelect && day && day > today) {
      return true;
    }
    const firstDayOfCurrentMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    if (day && (day < firstDayOfCurrentMonth || day < today)) {
      return false;
    }
    return true;
  }

  selectDate(day: Date): void {
    if (day) {
      console.log('Selected date:', day.toDateString());
      // Handle date selection logic here
    }
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }
  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }
}
