import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatealignComponent } from './createalign.component';

describe('CreatealignComponent', () => {
  let component: CreatealignComponent;
  let fixture: ComponentFixture<CreatealignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatealignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatealignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});