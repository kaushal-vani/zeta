import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Feature Components */
import { AddEmailComponent } from '../../features/add-email/add-email.component';
import { AddPhoneNumberComponent } from '../../features/add-phone-number/add-phone-number.component';
import { AuthenticationDrawerComponent } from '../../features/authentication-drawer/authentication-drawer.component';
import { EditEmailComponent } from '../../features/edit-email/edit-email.component';
import { EditPhoneNumberComponent } from '../../features/edit-phone-number/edit-phone-number.component';
import { ForgetPasswordComponent } from '../../features/forget-password/forget-password.component';
import { LogInComponent } from '../../features/log-in/log-in.component';
import { OneTimePasswordComponent } from '../../features/one-time-password/one-time-password.component';
import { SignUpComponent } from '../../features/sign-up/sign-up.component';
import { VerificationFailureComponent } from '../../features/verification-failure/verification-failure.component';
import { VerificationSuccessfulComponent } from '../../features/verification-successful/verification-successful.component';
import { SCREEN_VIEW } from '@zeta/zeta/shared';

@Component({
  selector: 'lib-authenticate-page',
  standalone: true,
  imports: [
    CommonModule,
    AddEmailComponent,
    AddPhoneNumberComponent,
    AuthenticationDrawerComponent,
    EditEmailComponent,
    EditPhoneNumberComponent,
    ForgetPasswordComponent,
    LogInComponent,
    OneTimePasswordComponent,
    SignUpComponent,
    VerificationFailureComponent,
    VerificationSuccessfulComponent
  ],
  templateUrl: './authenticate-page.component.html',
  styleUrl: './authenticate-page.component.scss'
})
export class AuthenticatePageComponent {
  currentView : SCREEN_VIEW = SCREEN_VIEW.SIGN_UP;
  authScreen = SCREEN_VIEW
}
