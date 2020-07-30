import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesPageRoutingModule } from './detalhes-routing.module';

import { DetalhesPage } from './detalhes.page';

import { LikeChipComponent } from '../components/like-chip/like-chip.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesPageRoutingModule
  ],
  declarations: [DetalhesPage, LikeChipComponent]
})
export class DetalhesPageModule {}
