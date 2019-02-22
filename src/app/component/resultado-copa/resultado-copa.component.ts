import { Component, OnInit, Input } from '@angular/core';
import { Copa } from '../../model/copa';

@Component({
  selector: 'app-resultado-copa',
  templateUrl: './resultado-copa.component.html',
  styleUrls: ['./resultado-copa.component.scss']
})
export class ResultadoCopaComponent {
  @Input() copa: Copa;
}
