import {Component, Input, OnInit} from '@angular/core';
import {ShowVideoService} from '../show-video-service/show-video.service';

@Component({
  selector: 'app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() cardSubtitle: string;
  @Input() avatarImageSrc: any;
  @Input() appImageSrc: any;
  @Input() moviePath: any;
  @Input() launchURL: any;

  constructor(public showVideoService: ShowVideoService) {
  }

  ngOnInit() {
  }

  onCardClicked() {
    console.log('clicked');
    if (this.launchURL) {
      window.open(this.launchURL);
    } else {
      this.showVideoService.activateVideo(this.moviePath);
    }
  }
}
