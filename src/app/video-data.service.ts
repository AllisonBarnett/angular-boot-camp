import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from './app-types';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  constructor(private http: HttpClient) {
    this.videos$ = http
      .get<Video[]>(apiUrl + '/videos')
      .pipe(
        map((videos) =>
          videos.filter((video) => video.title.startsWith('Angular'))
        )
      );
  }
  videos$: Observable<Video[]>;
}
