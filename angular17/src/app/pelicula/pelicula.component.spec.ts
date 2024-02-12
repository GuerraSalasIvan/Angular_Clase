import { ComponentFixture, TestBed } from '@angular/core/testing';

import { peliculaComponent } from './pelicula.component';

describe('peliculaComponent', () => {
  let component: peliculaComponent;
  let fixture: ComponentFixture<peliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [peliculaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(peliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
