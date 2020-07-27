import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  republica1: any;

  constructor() { }

  ngOnInit() {
    this.republica1 = {
      img: '../../assets/img/republica1.jpg',
      endereco: 'Vila dos Sonhos Quebrados, nº 219',
      cidade: 'Cidade Maravilha',
      bairro: 'Vila das Flores',
      descricao: '4 quartos, 12 beliches, área de serviço ampla, salão de jogos, bem localizada próxima à estação de metro.',
    };
  }

}
