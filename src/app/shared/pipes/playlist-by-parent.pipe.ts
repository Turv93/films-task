import { Pipe, PipeTransform } from '@angular/core';
import { IPlaylist } from '../services/playlist.service';

@Pipe({
  name: 'playlistByParent'
})
export class PlaylistByParentPipe implements PipeTransform {

  transform(playlists: IPlaylist[], parentId: number): any {
    if(playlists){
      return playlists.filter((playlist)=>playlist.parent === parentId);
    } else {
      return [];
    }
  }

}
