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
import { MarketingDigitalServicesComponent } from './pages/industries/life-science/launch&commercialization/marketing-digital-services/marketing-digital-services.component';
import { SalesAnalyticsComponent } from './pages/industries/life-science/launch&commercialization/sales-analytics/sales-analytics.component';
import { GlobalClinicalOpsComponent } from './pages/industries/life-science/manufacturing/global-clinical-ops/global-clinical-ops.component';
import { SupplyChainTransformationComponent } from './pages/industries/life-science/manufacturing/supply-chain-transformation/supply-chain-transformation.component';
import { InventoryOptimizationComponent } from './pages/industries/life-science/manufacturing/inventory-optimization/inventory-optimization.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '',  component: MainComponent}, // Default route
  { path: 'solutions/r&d', component: RAndDComponent }, 
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
  
  { path: 'resource-center/industry-primers', component: IndustryPrimersComponent },
  { path: 'resource-center/blog', component: BlogComponent },
  { path: 'resource-center/ai-lab', component: AiLabComponent },
  { path: 'resource-center/podcast-webinars', component: PodcastWebinarsComponent },
  { path: 'resource-center/events&news', component: EventsNewsComponent },
  { path: 'resource-center/customer-hub/success&case-studies', component: SuccessCaseStudiesComponent },
  { path: 'resource-center/customer-hub/testimonials', component: TestimonialsComponent },
  
  { path: 'industries/bio-tech/in-out-licensing', component: InOutLicensingComponent },
  { path: 'industries/bio-tech/business-research', component: BusinessResearchComponent },
  { path: 'industries/bio-tech/pipeline-product-forecast', component: PipelineProductForecastComponent},
  { path: 'industries/bio-tech/portfolio-strategy/ppm-consulting', component: PpmConsultingComponent },
  { path: 'industries/bio-tech/portfolio-strategy/portfolio-analytics', component: PortfolioAnalyticsComponent },
  { path: 'industries/bio-tech/r&d/drug-discovery', component: DrugDiscoveryComponent },
  { path: 'industries/bio-tech/r&d/clinical-data-management', component: ClinicalDataManagementComponent },
  { path: 'industries/bio-tech/r&d/business-research', component: BusinessResearchComponent },
  { path: 'industries/bio-tech/r&d/business-development-licensing', component: BusinessDevelopmentComponent },
  { path: 'industries/bio-tech/r&d/medical-affairs', component: MedicalAffairsComponent },
  { path: 'industries/bio-tech/r&d/pharmacovigilance', component: PharmacovigilanceComponent },

  { path: 'industries/life-science/manufacturing/global-clinical-ops', component: GlobalClinicalOpsComponent },
  { path: 'industries/life-science/manufacturing/supply-chain-transformation', component: SupplyChainTransformationComponent },
  { path: 'industries/life-science/manufacturing/inventory-optimization', component: InventoryOptimizationComponent },
  { path: 'industries/life-science/launch&commercialization/launch-readiness', component: LaunchReadinessComponent },
  { path: 'industries/life-science/launch&commercialization/commercial-analytics', component: CommercialAnalyticsComponent },
  { path: 'industries/life-science/launch&commercialization/forecasting', component: ForecastingComponent },
  { path: 'industries/life-science/launch&commercialization/marketing&digital-service', component: MarketingDigitalServicesComponent },
  { path: 'industries/life-science/launch&commercialization/sales-analytics', component: SalesAnalyticsComponent },
  
  { path: 'industries/life-science/portfolio-strategy/ppm-consulting', component: PpmConsultingComponent },
  { path: 'industries/life-science/portfolio-strategy/portfolio-analytics', component: PortfolioAnalyticsComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
