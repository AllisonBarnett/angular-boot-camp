import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/app-types';
import { HttpClient } from '@angular/common/http';

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
  videoList: Video[] = [];

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }

  constructor(http: HttpClient) {
    http
      .get<Video[]>(apiUrl)
      .subscribe((videoList) => (this.videoList = videoList));
  }

  ngOnInit(): void {}
}
