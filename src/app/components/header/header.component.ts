import { Component } from '@angular/core';
import { TheatroIconComponent } from '../../icons/theatro-icon/theatro-icon.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    TheatroIconComponent,
    ArrowLeftComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
  ){}

  backToHome(){
    window.history.back()
  }

}
