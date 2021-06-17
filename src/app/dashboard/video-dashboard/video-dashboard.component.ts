import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/app-types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { VideoDataService } from 'src/app/video-data.service';
import { filter, map, switchMap } from 'rxjs/operators';

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
  selectedVideo: Observable<Video>;
  videos$: Observable<Video[]>;

  constructor(svc: VideoDataService, route: ActivatedRoute) {
    this.videos$ = svc.videos$;

    this.selectedVideo = route.queryParamMap.pipe(
      map((params) => params.get('videoId') as string),
      filter((id) => !!id),
      switchMap((id) => svc.loadSingleVideo(id))
    );
  }

  ngOnInit(): void {}
}
