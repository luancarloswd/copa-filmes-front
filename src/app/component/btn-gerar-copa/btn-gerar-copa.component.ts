import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Copa } from 'src/app/model/copa';
import { FilmeService } from '../../service/filme.service';

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
