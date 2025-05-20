import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-card',
  imports: [],
  templateUrl: './step-card.component.html',
  styleUrl: './step-card.component.css'
})
export class StepCardComponent {
 @Input() stepNumber: number | undefined;
 @Input() title: string | undefined;
 @Input() text: string | undefined;
}
