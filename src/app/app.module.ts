import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule, MatDividerModule, MatCheckboxModule, MatButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilmeService } from './service/filme.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
