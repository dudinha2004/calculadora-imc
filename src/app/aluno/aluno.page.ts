import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage {
  aluno = {
    nome: 'Maria Eduarda Louvem Araujo',
    foto: 'assets/foto_aluno.jpg',
    codigo: '23105907'
  };
}
