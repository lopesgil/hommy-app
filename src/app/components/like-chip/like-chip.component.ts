import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-chip',
  templateUrl: './like-chip.component.html',
  styleUrls: ['./like-chip.component.scss'],
})
export class LikeChipComponent implements OnInit {
  estaCurtido: boolean;

  @Input() likes: number;
  @Output() chipClicado = new EventEmitter<boolean>();

  constructor() { }


  ngOnInit() {
    this.estaCurtido = false;
  }

  clicouChip() {
    this.estaCurtido = !this.estaCurtido;
    this.chipClicado.emit(this.estaCurtido);
  }

}
