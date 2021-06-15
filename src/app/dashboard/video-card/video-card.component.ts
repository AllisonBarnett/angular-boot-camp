import { Component, Input } from '@angular/core';
import { Video } from 'src/app/app-types';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css'],
})
export class VideoCardComponent {
  @Input() video: Video | undefined;
  @Input() isSelected = false;
}
