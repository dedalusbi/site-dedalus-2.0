import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanelSequenceService} from "../../panels/panel-sequence.service";

@Component({
  selector: 'app-first-panel',
  imports: [CommonModule],
  templateUrl: './first-panel.component.html',
  styleUrl: './first-panel.component.css'
})
export class FirstPanelComponent {

  constructor (public panelSequenceService: PanelSequenceService) {}

}
