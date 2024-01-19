import { Component } from '@angular/core';
import { Riya } from '../myclasses';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  userInfo = new Riya();
}
