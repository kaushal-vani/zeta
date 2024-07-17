import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SCREEN_VIEW, ScreenAction } from '@zeta/zeta/shared';
import { ButtonComponent } from 'zenova';

@Component({
  selector: 'lib-sign-up',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  @Output() navigate = new EventEmitter<ScreenAction>();

  createAccount() {
    this.navigate.emit({
      currentView: SCREEN_VIEW.SIGN_UP
    });
  }
}
