import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
// import { MatMenuModule} from '@angular/material';  
import{MatMenuModule}from'@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { OurStoryComponent } from './pages/about-us/our-story/our-story.component';
import { RAndDComponent } from './pages/solutions/r-and-d/r-and-d.component';
import { CommercialComponent } from './pages/solutions/commercial/commercial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PpmComponent } from './pages/technologies/ppm/ppm.component';
import { AiMlComponent } from './pages/technologies/ai-ml/ai-ml.component';
import { CloudComponent } from './pages/technologies/cloud/cloud.component';
import { BigDataComponent } from './pages/technologies/big-data/big-data.component';
import { DataEngineeringComponent } from './pages/technologies/data-engineering/data-engineering.component';
import { PartnersComponent } from './pages/partners/partners/partners.component';
import { PartnerWithUsComponent } from './pages/partners/partner-with-us/partner-with-us.component';
import { LeadershipComponent } from './pages/about-us/leadership/leadership.component';
import { ComplianceComponent } from './pages/about-us/compliance/compliance.component';
import { WorkComponent } from './pages/about-us/work/work.component';
import { ContactUsComponent } from './pages/about-us/contact-us/contact-us.component';
import { IndustryPrimersComponent } from './pages/resource-center/industry-primers/industry-primers.component';
import { BlogComponent } from './pages/resource-center/blog/blog.component';
import { AiLabComponent } from './pages/resource-center/ai-lab/ai-lab.component';
import { PodcastWebinarsComponent } from './pages/resource-center/podcast-webinars/podcast-webinars.component';
import { EventsNewsComponent } from './pages/resource-center/events-news/events-news.component';
import { SuccessCaseStudiesComponent } from './pages/resource-center/customer-hub/success-case-studies/success-case-studies.component';
import { TestimonialsComponent } from './pages/resource-center/customer-hub/testimonials/testimonials.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    OurStoryComponent,
    RAndDComponent,
    CommercialComponent,
    PpmComponent,
    AiMlComponent,
    CloudComponent,
    BigDataComponent,
    DataEngineeringComponent,
    PartnersComponent,
    PartnerWithUsComponent,
    LeadershipComponent,
    ComplianceComponent,
    WorkComponent,
    ContactUsComponent,
    IndustryPrimersComponent,
    BlogComponent,
    AiLabComponent,
    PodcastWebinarsComponent,
    EventsNewsComponent,
    SuccessCaseStudiesComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
