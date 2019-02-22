import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilmesComponent } from './lista-filmes.component';
import { MatCard, MatCheckbox, MatRipple } from '@angular/material';
import { FilmeService } from 'src/app/service/filme.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListaFilmesComponent', () => {
  let component: ListaFilmesComponent;
  let fixture: ComponentFixture<ListaFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFilmesComponent, MatCard, MatCheckbox, MatRipple ],
      providers: [FilmeService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
