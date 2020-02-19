import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AadhardetailsComponent } from './aadhardetails.component';

describe('AadhardetailsComponent', () => {
  let component: AadhardetailsComponent;
  let fixture: ComponentFixture<AadhardetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AadhardetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadhardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
