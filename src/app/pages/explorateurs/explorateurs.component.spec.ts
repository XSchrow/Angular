import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorateursComponent } from './explorateurs.component';

describe('ExplorateursComponent', () => {
  let component: ExplorateursComponent;
  let fixture: ComponentFixture<ExplorateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
