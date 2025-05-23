import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-step-card',
  imports: [CommonModule],
  templateUrl: './step-card.component.html',
  styleUrl: './step-card.component.css'
})
export class StepCardComponent {
 @Input() stepNumber: number | undefined;
 @Input() title: string | undefined;
 @Input() text: string | undefined;
 @Input() bgColorClass: string = '#FFFFFF';
 @Input() numberPosition: 'left' | 'right' = 'right'; 

}
