import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurStoryComponent } from './pages/about-us/our-story/our-story.component';
import { MainComponent } from './main/main.component';
import { RAndDComponent } from './pages/solutions/r-and-d/r-and-d.component';
import { CommercialComponent } from './pages/solutions/commercial/commercial.component';
import { PpmComponent } from './pages/technologies/ppm/ppm.component';
import { AiMlComponent } from './pages/technologies/ai-ml/ai-ml.component';
import { CloudComponent } from './pages/technologies/cloud/cloud.component';
import { BigDataComponent } from './pages/technologies/big-data/big-data.component';
import { DataEngineeringComponent } from './pages/technologies/data-engineering/data-engineering.component';
import { PartnersComponent } from './pages/partners/partners/partners.component';
import { PartnerWithUsComponent } from './pages/partners/partner-with-us/partner-with-us.component';
import { ContactUsComponent } from './pages/about-us/contact-us/contact-us.component';
import { WorkComponent } from './pages/about-us/work/work.component';
import { ComplianceComponent } from './pages/about-us/compliance/compliance.component';
import { BoardComponent } from './pages/about-us/board/board.component';
import { LeadershipComponent } from './pages/about-us/leadership/leadership.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '',  component: MainComponent}, // Default route
  { path: 'solutions/r-and-d', component: RAndDComponent }, 
  { path: 'solutions/commercial', component: CommercialComponent },

  { path: 'technologies/ppm', component: PpmComponent },
  { path: 'technologies/ai-ml', component: AiMlComponent },
  { path: 'technologies/cloud', component: CloudComponent },
  { path: 'technologies/big-data', component: BigDataComponent },
  { path: 'technologies/data-engineering', component: DataEngineeringComponent },
  
  { path: 'partners', component: PartnersComponent },
  { path: 'partner-with-us', component: PartnerWithUsComponent },
  
  { path: 'about-us/our-story', component: OurStoryComponent },
  { path: 'about-us/leadership', component: LeadershipComponent },
  { path: 'about-us/board', component: BoardComponent },
  { path: 'about-us/compliance', component: ComplianceComponent },
  { path: 'about-us/work', component: WorkComponent },
  { path: 'about-us/contact-us', component: ContactUsComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
