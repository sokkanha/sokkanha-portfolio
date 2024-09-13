import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [AboutMeComponent, ContactMeComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [AboutMeComponent, ContactMeComponent]
})
export class MainPfModule { }
