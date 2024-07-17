import { Route } from '@angular/router';
import { AuthenticatePageComponent } from '@zeta/zeta/authenticate/ui';
import { HomePageComponent } from '@zeta/zeta/home/ui';
import { ProfilePageComponent } from '@zeta/zeta/profile/ui';
import { StatsPageComponent } from '@zeta/zeta/stats/ui';
import { TaskPageComponent } from '@zeta/zeta/task/ui';
import { TimelinePageComponent } from '@zeta/zeta/timeline/ui';

export const appRoutes: Route[] = [
  { path: 'authenticate', component: AuthenticatePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'task', component: TaskPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'stats', component: StatsPageComponent },
  { path: 'timeline', component: TimelinePageComponent },
  { path: '', redirectTo: '/authenticate', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
