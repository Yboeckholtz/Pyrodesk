import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-touch-view',
  templateUrl: './touch-view.component.html',
  styleUrls: ['./touch-view.component.css']
})
export class TouchViewComponent implements OnInit {

  isDisplay = false;
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
