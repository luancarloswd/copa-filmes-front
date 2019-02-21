import { Component } from '@angular/core';
import { FilmeService } from './service/filme.service';
import { Filme } from './model/filme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'copa-filmes-front';
  filmes: Filme[];

  constructor(public filmeService: FilmeService) {
      filmeService.obterFilmes().subscribe((filmes) => {
        this.filmes = filmes;
      });
  }
}
