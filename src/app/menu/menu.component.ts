import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()  showmode!: string;
  @Output() showmodeChange = new EventEmitter<string>();

   enablePlay: string = "nav-link active";
   enableWhatis: string = "nav-link";
   enableReading: string = "nav-link";
   enableAuthor: string = "nav-link";
   
   
  constructor() { }

  ngOnInit(): void {
  }

  
  chgMode(newmode: string) {
    if(newmode !== this.showmode){
      this.enablePlay = "nav-link";
      this.enableWhatis = "nav-link";
      this.enableReading = "nav-link";
      this.enableAuthor = "nav-link";

      switch (newmode) {
        case 'play':
            this.enablePlay = "nav-link active";
            break;
        case 'whatis':
          this.enableWhatis = "nav-link active";
            break;
        case 'reading':
          this.enableReading = "nav-link active";
            break;
        case 'author':
          this.enableAuthor = "nav-link active";
          break;
      }
      this.showmode = newmode;
      this.showmodeChange.emit(this.showmode);
    }
  }

}
