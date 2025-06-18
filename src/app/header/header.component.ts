import { Component } from '@angular/core';
import { PanelSequenceService } from '../panels/panel-sequence.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (public panelSequenceService: PanelSequenceService) {}
}
