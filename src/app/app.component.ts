import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isDisplay = false;
  title = 'VestaVuurwerk';

  onShowHide(value) {
    this.isDisplay = value
   }
}
