import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ExperienceCardComponent } from './component/experience-card/experience-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ExperienceCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
