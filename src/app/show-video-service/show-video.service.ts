import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ShowVideoService {

  startVideo: EventEmitter<any>;

  constructor() {
    this.startVideo = new EventEmitter<any>();
  }

  activateVideo(src: any) {
    this.startVideo.emit(src);
  }
}
