import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';



@NgModule({
  declarations: [AboutMeComponent, ContactMeComponent],
  imports: [
    CommonModule
  ]
})
export class MainPfModule { }
