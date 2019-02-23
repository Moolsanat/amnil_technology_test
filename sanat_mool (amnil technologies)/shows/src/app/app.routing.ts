import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShowCalendarComponent } from './show-calendar/show-calendar.component';

export const router: Routes = [
	{path: '', component: AppComponent},
	{path: 'shows', component: ShowCalendarComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});

