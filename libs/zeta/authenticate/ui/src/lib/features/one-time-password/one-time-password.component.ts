import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-one-time-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-time-password.component.html',
  styleUrl: './one-time-password.component.scss'
})
export class OneTimePasswordComponent {}
