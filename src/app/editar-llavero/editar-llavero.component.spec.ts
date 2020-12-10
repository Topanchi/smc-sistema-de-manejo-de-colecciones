import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLlaveroComponent } from './editar-llavero.component';

describe('EditarLlaveroComponent', () => {
  let component: EditarLlaveroComponent;
  let fixture: ComponentFixture<EditarLlaveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLlaveroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLlaveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
