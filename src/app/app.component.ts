import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { VideocontainerComponent } from "./videocontainer/videocontainer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, VideocontainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
