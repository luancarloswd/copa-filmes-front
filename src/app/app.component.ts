import { Component } from '@angular/core';
import { FilmeService } from './service/filme.service';
import { Filme } from './model/filme';
import { Copa } from './model/copa';
import { MatCheckboxChange } from '../../node_modules/@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filmesEscolhidos: string[];
  copaGerada: Copa;

  constructor() { }

  atribuirFilmes(filmesEscolhidos: string[]) {
    this.filmesEscolhidos = filmesEscolhidos;
  }

  atribuirCopa(copa) {
    this.copaGerada = copa;
  }
}
