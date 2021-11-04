import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRequestsComponent } from './form-requests.component';

describe('FormRequestsComponent', () => {
  let component: FormRequestsComponent;
  let fixture: ComponentFixture<FormRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
