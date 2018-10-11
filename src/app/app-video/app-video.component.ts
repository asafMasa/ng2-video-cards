import {Component, HostBinding, OnInit} from '@angular/core';
import {ShowVideoService} from '../show-video-service/show-video.service';

@Component({
  selector: 'app-video',
  templateUrl: './app-video.component.html',
  styleUrls: ['./app-video.component.css']
})
export class AppVideoComponent implements OnInit {

  @HostBinding('class.show') isHoveringOverDrop = false;

  moviePath: string;

  constructor(public showVideoService: ShowVideoService) {

  }

  ngOnInit() {
    this.showVideoService.startVideo.subscribe((moviePath) => {
      console.log('show');
      this.isHoveringOverDrop = true;
      this.moviePath = moviePath;
    });
  }

  close() {
    this.isHoveringOverDrop = false;
  }

}
