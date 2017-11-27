import { Component, OnInit } from '@angular/core';

import { PlaylistService, IPlaylist} from './shared/services/playlist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  playlists: IPlaylist[];
  parentId: number;
    
  constructor(private _playlistService: PlaylistService) { }

  ngOnInit(): void {
    this._playlistService.get().subscribe(data => {
      this.playlists = data;
      this.parentId = 0;
    });

  }

  onPlaylistSelect(playListIndex: number){
    if (playListIndex == -1) {
      this.parentId = this.playlists.find((playlist)=>playlist._index == this.parentId).parent;
    

    } else {
      this.parentId = playListIndex;
    }
    
    
  }

}
