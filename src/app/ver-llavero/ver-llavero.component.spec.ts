import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerLlaveroComponent } from './ver-llavero.component';

describe('VerLlaveroComponent', () => {
  let component: VerLlaveroComponent;
  let fixture: ComponentFixture<VerLlaveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerLlaveroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerLlaveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
