import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { BtnGerarCopaComponent } from './component/btn-gerar-copa/btn-gerar-copa.component';
import { ListaFilmesComponent } from './component/lista-filmes/lista-filmes.component';
import { ResultadoCopaComponent } from './component/resultado-copa/resultado-copa.component';
import { MatDivider, MatCard, MatCheckbox, MatBadge, MatRipple } from '@angular/material';
import { FilmeService } from './service/filme.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CabecalhoComponent,
        BtnGerarCopaComponent,
        ListaFilmesComponent,
        ResultadoCopaComponent,
        MatDivider,
        MatCard,
        MatCheckbox,
        MatBadge,
        MatRipple
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        FilmeService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
