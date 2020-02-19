import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycformComponent } from './kycform.component';

describe('KycformComponent', () => {
  let component: KycformComponent;
  let fixture: ComponentFixture<KycformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
