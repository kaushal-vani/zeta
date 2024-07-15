import { inject, Injectable } from '@angular/core';
import { ScreenAction } from '../models/authenticate.interfaces';
import { SCREEN_VIEW } from '../enums/authenticate.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScreenNavigationService {
  private route = inject(Router)
  currentView = SCREEN_VIEW.NONE || SCREEN_VIEW.SIGN_UP

  initiateRedirect(screen: ScreenAction): void {
    if(screen.currentView === SCREEN_VIEW.SIGN_UP){
      this.route.navigate(['/home'])
    };
    if(screen.currentView === SCREEN_VIEW.AUTHENTICATION_DRAWER){
      this.currentView = screen.nextView as SCREEN_VIEW;
    }
  }
}
