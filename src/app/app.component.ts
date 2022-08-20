import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Burnout Bingo';
  showmode: string  = "play"; //play,reading,whatis, author


  
}
