import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { VideocontainerComponent } from "./videocontainer/videocontainer.component";
import { StepCardComponent } from "./step-card/step-card.component";
import { CarouselComponent } from './carousel/carousel.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { EnqueteSectionComponent } from './enquete-section/enquete-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,VideocontainerComponent, StepCardComponent, CarouselComponent,
    ImageCardComponent, EnqueteSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
