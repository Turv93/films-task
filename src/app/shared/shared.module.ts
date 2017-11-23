import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistService } from './services/playlist.service';

import { PlaylistMenuComponent } from './components/playlist-menu/playlist-menu.component';
import { PlaylistInfoComponent } from './components/playlist-info/playlist-info.component';
import { PlaylistByParentPipe } from './pipes/playlist-by-parent.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaylistMenuComponent,
    PlaylistInfoComponent,
    PlaylistByParentPipe
  ],
  exports: [
    PlaylistMenuComponent,
    PlaylistInfoComponent,
    PlaylistByParentPipe
  ],
  providers: [
    PlaylistService
  ]
})
export class SharedModule { }
