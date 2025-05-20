import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { VideocontainerComponent } from "./videocontainer/videocontainer.component";
import { StepCardComponent } from "./step-card/step-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, VideocontainerComponent, StepCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
