import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ExperienceCardComponent } from './component/experience-card/experience-card.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroUsers, heroPhone, heroMapPin, heroEnvelope, heroBars3, heroXMark } from '@ng-icons/heroicons/outline';
import { heroEnvelopeSolid } from '@ng-icons/heroicons/solid';
import { octMarkGithub } from '@ng-icons/octicons';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { CarouselControlComponent, CarouselInnerComponent, CarouselItemComponent, CarouselModule, ThemeDirective } from '@coreui/angular';

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
    NgIconsModule.withIcons({ heroUsers, heroPhone, heroMapPin, heroEnvelope, heroEnvelopeSolid, octMarkGithub, bootstrapLinkedin, heroBars3, heroXMark }),
    CarouselModule, CarouselControlComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
