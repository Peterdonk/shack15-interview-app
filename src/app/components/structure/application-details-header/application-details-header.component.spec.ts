import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsHeaderComponent } from './application-details-header.component';

describe('ApplicationDetailsHeaderComponent', () => {
  let component: ApplicationDetailsHeaderComponent;
  let fixture: ComponentFixture<ApplicationDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
