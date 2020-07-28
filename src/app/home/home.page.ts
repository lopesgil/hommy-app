import { Component, OnInit } from '@angular/core';
import { Republica } from '../republica';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  republicas: Republica[];

  constructor() { }

  ngOnInit() {
    this.republicas = [
      {
        img: '../../assets/img/republica1.jpg',
        endereco: 'Vila dos Sonhos Quebrados, nº 219',
        cidade: 'Cidade Maravilha',
        bairro: 'Vila das Flores',
        descricao: '4 quartos, 12 beliches, área de serviço ampla, salão de jogos, bem localizada próxima à estação de metro.',
      },
      {
        img: '../../assets/img/republica2.jpg',
        endereco: 'Estrada dos Velhos Tijolos Amarelos, nº 234',
        cidade: 'São Miguel',
        bairro: 'Pedra Lascada',
        descricao: '10 quartos duplos, espaço amplo, inovador, instalações modernas, área comunitária perfeita tanto para lazer quanto estudos, excelente localização.'
      },
      {
        img: '../../assets/img/republica3.jpg',
        endereco: 'Rua Pônei Doce, nº 510',
        cidade: 'Cidade Maravilha',
        bairro: 'Divino',
        descricao: '4 quartos, 4 beliches, ambiente acessível, confortável e seguro, bem localizado.',
      },
      {
        img: '../../assets/img/republica4.jpg',
        endereco: 'Travessa Rubi, nº 232',
        cidade: 'Cidade Maravilha',
        bairro: 'Portelinha',
        descricao: 'Por outro lado, a competitividade nas transações comerciais deve passar por modificações independentemente das formas de ação.',
      },
      {
        img: '../../assets/img/republica5.jpg',
        endereco: 'Baía Inglesa, nº 084',
        cidade: 'Santana de Bocaiúvas',
        bairro: 'Formigas',
        descricao: '5 quartos, 4 beliches, confortável, acessível, localizado proximo a estação de trem, ambiente comum aconchegante.',
      },
    ];
  }

}
