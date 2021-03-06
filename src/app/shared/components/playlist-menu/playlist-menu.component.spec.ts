import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistMenuComponent } from './playlist-menu.component';

describe('PlaylistMenuComponent', () => {
  let component: PlaylistMenuComponent;
  let fixture: ComponentFixture<PlaylistMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
