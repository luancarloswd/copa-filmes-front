import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule, MatDividerModule, MatCheckboxModule, MatButtonModule, MatBadgeModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilmeService } from './service/filme.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { BtnGerarCopaComponent } from './btn-gerar-copa/btn-gerar-copa.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ListaFilmesComponent,
    BtnGerarCopaComponent
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
