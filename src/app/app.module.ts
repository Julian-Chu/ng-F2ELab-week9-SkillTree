import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { CurrentRankComponent } from './current-rank/current-rank.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillDetailComponent,
    CurrentRankComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
