import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AboutComponent } from '../app/about/about.component';
import { MainBodyComponent } from './home/main-body/main-body.component';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'results', component: ResultsComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    MainBodyComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
