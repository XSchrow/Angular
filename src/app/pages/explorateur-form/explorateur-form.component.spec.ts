import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorateurFormComponent } from './explorateur-form.component';

describe('ExplorateurFormComponent', () => {
  let component: ExplorateurFormComponent;
  let fixture: ComponentFixture<ExplorateurFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorateurFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorateurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
