import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule, MatDividerModule, MatCheckboxModule, MatButtonModule, MatBadgeModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilmeService } from './service/filme.service';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { ListaFilmesComponent } from './component/lista-filmes/lista-filmes.component';
import { BtnGerarCopaComponent } from './component/btn-gerar-copa/btn-gerar-copa.component';
import { ResultadoCopaComponent } from './component/resultado-copa/resultado-copa.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ListaFilmesComponent,
    BtnGerarCopaComponent,
    ResultadoCopaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatBadgeModule,
    FlexLayoutModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
