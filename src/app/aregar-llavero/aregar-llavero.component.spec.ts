import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AregarLlaveroComponent } from './aregar-llavero.component';

describe('AregarLlaveroComponent', () => {
  let component: AregarLlaveroComponent;
  let fixture: ComponentFixture<AregarLlaveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AregarLlaveroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AregarLlaveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
