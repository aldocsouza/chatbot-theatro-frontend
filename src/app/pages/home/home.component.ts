import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArrowRightComponent } from '../../icons/arrow-right/arrow-right.component';
import { IconFrameComponent } from '../../icons/icon-frame/icon-frame.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArrowRightComponent,
    IconFrameComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router
  ){}

  goToChat(){
    this.router.navigate(['chat'])
  }

}
