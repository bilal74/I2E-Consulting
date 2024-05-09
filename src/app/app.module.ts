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
import { InOutLicensingComponent } from './pages/industries/bio-tech/in-out-licensing/in-out-licensing.component';
import { BusinessResearchComponent } from './pages/industries/bio-tech/business-research/business-research.component';
import { PipelineProductForecastComponent } from './pages/industries/bio-tech/pipeline-product-forecast/pipeline-product-forecast.component';
import { PpmConsultingComponent } from './pages/industries/bio-tech/portfolio-strategy/ppm-consulting/ppm-consulting.component';
import { PortfolioAnalyticsComponent } from './pages/industries/bio-tech/portfolio-strategy/portfolio-analytics/portfolio-analytics.component';
import { DrugDiscoveryComponent } from './pages/industries/bio-tech/r&d/drug-discovery/drug-discovery.component';
import { ClinicalDataManagementComponent } from './pages/industries/bio-tech/r&d/clinical-data-management/clinical-data-management.component';
import { BusinessDevelopmentComponent } from './pages/industries/bio-tech/r&d/business-development/business-development.component';
import { MedicalAffairsComponent } from './pages/industries/bio-tech/r&d/medical-affairs/medical-affairs.component';
import { PharmacovigilanceComponent } from './pages/industries/bio-tech/r&d/pharmacovigilance/pharmacovigilance.component';
import { LaunchReadinessComponent } from './pages/industries/life-science/launch&commercialization/launch-readiness/launch-readiness.component';
import { CommercialAnalyticsComponent } from './pages/industries/life-science/launch&commercialization/commercial-analytics/commercial-analytics.component';
import { ForecastingComponent } from './pages/industries/life-science/launch&commercialization/forecasting/forecasting.component';
import { SalesAnalyticsComponent } from './pages/industries/life-science/launch&commercialization/sales-analytics/sales-analytics.component';
import { MarketingDigitalServicesComponent } from './pages/industries/life-science/launch&commercialization/marketing-digital-services/marketing-digital-services.component';
import { GlobalClinicalOpsComponent } from './pages/industries/life-science/manufacturing/global-clinical-ops/global-clinical-ops.component';
import { SupplyChainTransformationComponent } from './pages/industries/life-science/manufacturing/supply-chain-transformation/supply-chain-transformation.component';
import { InventoryOptimizationComponent } from './pages/industries/life-science/manufacturing/inventory-optimization/inventory-optimization.component';
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
    TestimonialsComponent,
    InOutLicensingComponent,
    BusinessResearchComponent,
    PipelineProductForecastComponent,
    PpmConsultingComponent,
    PortfolioAnalyticsComponent,
    DrugDiscoveryComponent,
    ClinicalDataManagementComponent,
    BusinessDevelopmentComponent,
    MedicalAffairsComponent,
    PharmacovigilanceComponent,
    LaunchReadinessComponent,
    CommercialAnalyticsComponent,
    ForecastingComponent,
    SalesAnalyticsComponent,
    MarketingDigitalServicesComponent,
    GlobalClinicalOpsComponent,
    SupplyChainTransformationComponent,
    InventoryOptimizationComponent
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
