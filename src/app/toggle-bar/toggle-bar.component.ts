  import { Component, OnInit, EventEmitter, Output } from '@angular/core';

  @Component({
    selector: 'app-toggle-bar',
    templateUrl: './toggle-bar.component.html',
    styleUrls: ['./toggle-bar.component.css']
  })
  export class ToggleBarComponent implements OnInit {
    isDisplay = false;
    
    @Output() showHide: EventEmitter<boolean> = new EventEmitter();
   
    toggleDisplay(){
     this.isDisplay = !this.isDisplay;
     this.showHide.emit(this.isDisplay);
    }

    constructor() { }
   
    ngOnInit(): void {
    }
   
   }