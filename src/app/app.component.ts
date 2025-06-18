import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { VideocontainerComponent } from "./videocontainer/videocontainer.component";
import { StepCardComponent } from "./step-card/step-card.component";
import { CarouselComponent } from './carousel/carousel.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { EnqueteSectionComponent } from './enquete-section/enquete-section.component';
import { FirstPanelComponent } from "./panels/first-panel/first-panel.component";
import { SecondPanelComponent } from "./panels/second-panel/second-panel.component";
import { PanelSequenceService } from './panels/panel-sequence.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, VideocontainerComponent, StepCardComponent, CarouselComponent,
    ImageCardComponent, EnqueteSectionComponent, FirstPanelComponent, SecondPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (public panelSequenceService:PanelSequenceService) {}
  
}
