import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlcPageComponent } from './wlc-page.component';

describe('WlcPageComponent', () => {
  let component: WlcPageComponent;
  let fixture: ComponentFixture<WlcPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlcPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
