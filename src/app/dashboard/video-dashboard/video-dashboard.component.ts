import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/app-types';
import { Observable } from 'rxjs';
import { VideoDataService } from 'src/app/video-data.service';

const apiUrl = 'https://api.angularbootcamp.com/videos';

export interface ViewDetail {
  age: number;
  region: string;
  date: string;
}

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css'],
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video | undefined;
  videos$: Observable<Video[]>;

  constructor(svc: VideoDataService) {
    this.videos$ = svc.videos$;
  }

  ngOnInit(): void {}

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
