import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [InfoComponent]
})
export class InfoPfModule { }
