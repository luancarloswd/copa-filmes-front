import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FilmeService } from '../service/filme.service';
import { Copa } from '../model/copa';

@Component({
  selector: 'app-btn-gerar-copa',
  templateUrl: './btn-gerar-copa.component.html',
  styleUrls: ['./btn-gerar-copa.component.scss']
})
export class BtnGerarCopaComponent {
  @Input() filmesEscolhidos: string[];
  @Output() obterCopa: EventEmitter<Copa> = new EventEmitter();

  constructor(private filmeService: FilmeService) { }

  gerarCopa() {
    this.filmeService.gerarCopa(this.filmesEscolhidos).subscribe((copa) => {
      this.obterCopa.emit(copa);
    });
  }
}
