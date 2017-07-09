import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LotteryComponent } from './lottery/lottery.component';
import { RegisterFormComponent } from './lottery/register-form/register-form.component';
import { CandidatesListComponent } from './lottery/candidates-list/candidates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LotteryComponent,
    RegisterFormComponent,
    CandidatesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
