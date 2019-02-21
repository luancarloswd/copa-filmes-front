import { Partida } from "./partida";
import { Resultado } from './resultado';
import { Filme } from './filme';

export class Copa {
    nome: string;
    numeroParticipantes: number;
    partidas: Partida[];
    resultado: Resultado[];
    filmes: Filme[];
}
