import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoradosComponent } from './valorados.component';

describe('ValoradosComponent', () => {
  let component: ValoradosComponent;
  let fixture: ComponentFixture<ValoradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
