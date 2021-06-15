import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from 'src/app/app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent {
  selectedId: string | undefined;
  @Input() videos: Video[] = [];
  @Output() selectVideo = new EventEmitter<Video>();
}
