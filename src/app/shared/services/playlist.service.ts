import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlaylistService {

  constructor(private http: HttpClient) { }
  
  get (){
     return this.http.get<IPlaylist[]>('/assets/data/playlist.json');
  }

}

export interface IPlaylist {
  _index: number;
  name: string;
  childs: number[];
  parent: number;
}
