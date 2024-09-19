import { Component } from '@angular/core';
import { HeaderComponent } from './comman-pages/header/header.component';
import { FooterComponent } from './comman-pages/footer/footer.component';
import { NavbarComponent } from './comman-pages/navbar/navbar.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { FactsComponent } from './home-page/facts/facts.component';
import { ServicesComponent } from './home-page/services/services.component';
import { ProjectComponent } from './home-page/project/project.component';
import { OurTeamComponent } from './home-page/our-team/our-team.component';
import { FeatureComponent } from './home-page/feature/feature.component';
import { TopFeatureComponent } from './home-page/top-feature/top-feature.component';
import { TestimonialComponent } from './home-page/testimonial/testimonial.component';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NavbarComponent,
    CarouselComponent,TopFeatureComponent , FactsComponent,
    ServicesComponent, ProjectComponent, OurTeamComponent,FeatureComponent,TestimonialComponent],
  templateUrl: './front.component.html',
  styleUrl: './front.component.css'
})
export class FrontComponent {



}
