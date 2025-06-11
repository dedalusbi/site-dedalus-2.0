import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-card',
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {

  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() imageUrl: string | undefined;
  @Input() bgColorClass: string = '#FFFFFF';

}
