import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [HomeComponent, NotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
