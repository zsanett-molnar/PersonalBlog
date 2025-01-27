import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ExperienceCardComponent } from './component/experience-card/experience-card.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'xp', component: ExperienceCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
