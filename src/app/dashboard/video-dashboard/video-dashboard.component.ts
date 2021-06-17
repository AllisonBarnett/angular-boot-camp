import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/app-types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { VideoDataService } from 'src/app/video-data.service';
import { map } from 'rxjs/operators';

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
  selectedVideoId: Observable<string>;
  videos$: Observable<Video[]>;

  constructor(svc: VideoDataService, route: ActivatedRoute) {
    this.videos$ = svc.videos$;

    this.selectedVideoId = route.queryParamMap.pipe(
      map((params) => params.get('videoId') as string)
    );
  }

  ngOnInit(): void {}
}
