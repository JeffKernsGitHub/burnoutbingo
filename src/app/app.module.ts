import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';
import { WhatisComponent } from './whatis/whatis.component';
import { AuthorComponent } from './author/author.component';
import { ReadingComponent } from './reading/reading.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameComponent,
    WhatisComponent,
    AuthorComponent,
    ReadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
