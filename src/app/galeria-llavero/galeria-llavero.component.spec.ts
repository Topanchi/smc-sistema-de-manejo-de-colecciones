import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaLlaveroComponent } from './galeria-llavero.component';

describe('GaleriaLlaveroComponent', () => {
  let component: GaleriaLlaveroComponent;
  let fixture: ComponentFixture<GaleriaLlaveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaLlaveroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaLlaveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
