import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurStoryComponent } from './pages/about-us/our-story/our-story.component';
import { MainComponent } from './main/main.component';
import { RAndDComponent } from './pages/solutions/r-and-d/r-and-d.component';
import { CommercialComponent } from './pages/solutions/commercial/commercial.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '',  component: MainComponent}, // Default route
  { path: 'about-us/our-story', component: OurStoryComponent },
  { path: 'solutions/r-and-d', component: RAndDComponent },
  { path: 'solutions/commercial', component: CommercialComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
