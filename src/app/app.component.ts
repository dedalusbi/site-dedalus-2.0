import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { StepCardComponent } from "./step-card/step-card.component";
import { CarouselComponent } from './carousel/carousel.component';
import { ImageCardComponent } from './image-card/image-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,  StepCardComponent, CarouselComponent,
    ImageCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor () {}
  
}
