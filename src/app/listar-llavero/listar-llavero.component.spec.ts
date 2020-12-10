import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLlaveroComponent } from './listar-llavero.component';

describe('ListarLlaveroComponent', () => {
  let component: ListarLlaveroComponent;
  let fixture: ComponentFixture<ListarLlaveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLlaveroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLlaveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
