import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Filme } from '../../model/filme';
import { FilmeService } from '../../service/filme.service';
import { MatCheckboxChange } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss']
})
export class ListaFilmesComponent implements OnInit {
  @Output() obterFilmesEscolhidos: EventEmitter<string[]> = new EventEmitter();

  filmes: Filme[];
  escolhidos: string[];

  constructor(public filmeService: FilmeService) {
    filmeService.obterFilmes().subscribe((filmes) => {
      this.filmes = filmes;
    });

    this.escolhidos = [];
  }

  ngOnInit() {
  }

  escolherFilme(change: MatCheckboxChange, id: string) {
    if (change.checked) {
      this.escolhidos.push(id);
    } else {
      this.escolhidos = this.escolhidos.filter(escolhido => escolhido !== id);
    }

    this.obterFilmesEscolhidos.emit(this.escolhidos);
  }

}
