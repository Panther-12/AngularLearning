import { Component } from '@angular/core';
import { Riya } from '../myclasses';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userInfo = new Riya();
}
