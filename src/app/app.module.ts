import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, DialogDataExampleDialog } from './app.component';
import {homepageComponent} from './homepageComponent';
import {aboutComponent} from './aboutComponent';
import {RouterModule, Routes} from '@angular/router';
import {ProgettoComponent} from './progettoComponent';
import { HttpModule } from '@angular/http';
import {contattiComponent} from "./contattiComponent";
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';


const appRoutes: Routes = [
  { path: '', component: homepageComponent },
  { path: 'about', component: aboutComponent },
  {path: 'progetto/:id', component: ProgettoComponent },
  {path: 'contatti', component: contattiComponent }
];

@NgModule({
  declarations: [
    AppComponent, homepageComponent, aboutComponent, ProgettoComponent, contattiComponent, DialogDataExampleDialog
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }), // <-- debugging purposes only
],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialog]
})
export class AppModule { }


