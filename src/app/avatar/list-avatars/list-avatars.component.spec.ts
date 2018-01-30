import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvatarsComponent } from './list-avatars.component';

describe('ListAvatarsComponent', () => {
  let component: ListAvatarsComponent;
  let fixture: ComponentFixture<ListAvatarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAvatarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
