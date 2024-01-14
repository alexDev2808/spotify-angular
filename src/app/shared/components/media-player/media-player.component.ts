import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    name: 'Getting Over',
    album: 'One Love',
    url: "",
    _id: 1,
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
