import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IPlaylist } from '../../services/playlist.service';




@Component({
  selector: 'app-playlist-menu',
  templateUrl: './playlist-menu.component.html',
  styleUrls: ['./playlist-menu.component.css']
})


export class PlaylistMenuComponent {
  @Input('data') playlists: IPlaylist[];
 
  @Output('select') select: EventEmitter<number> = new EventEmitter<number>();

  selectItem(playlistIndex: number) {
    this.select.emit(playlistIndex);
  }

  goToTop(playlistIndex: number) {
  
    this.select.emit(playlistIndex);
  }

  constructor() { }
  
  
}
