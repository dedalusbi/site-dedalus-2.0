import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelSequenceService } from '../panel-sequence.service';

@Component({
  selector: 'app-second-panel',
  imports: [CommonModule],
  templateUrl: './second-panel.component.html',
  styleUrl: './second-panel.component.css'
})
export class SecondPanelComponent {

  constructor(public panelSequenceService: PanelSequenceService) {}

}
