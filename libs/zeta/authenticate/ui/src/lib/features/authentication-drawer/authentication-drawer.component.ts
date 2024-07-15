import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEVICE, SCREEN_VIEW, ScreenAction } from '@zeta/zeta/shared';

@Component({
  selector: 'lib-authentication-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authentication-drawer.component.html',
  styleUrl: './authentication-drawer.component.scss'
})
export class AuthenticationDrawerComponent {
  @Output() navigate = new EventEmitter<ScreenAction>();

  addPhoneNumber() {
    this.navigate.emit({
      currentView: SCREEN_VIEW.AUTHENTICATION_DRAWER,
      nextView: SCREEN_VIEW.ONE_TIME_PASSWORD,
      deviceType: DEVICE.Phone_NUMBER,
    });
  }

  addEmailAddress() {
    this.navigate.emit({
      currentView: SCREEN_VIEW.AUTHENTICATION_DRAWER,
      nextView: SCREEN_VIEW.ONE_TIME_PASSWORD,
      deviceType: DEVICE.EMAIL
    });
  }
}
