import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FiatComponent } from './fiat/fiat.component';
import { AudiComponent } from './audi/audi.component';
import { FordComponent } from './ford/ford.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


const routes: Route[] = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'fiatComponent',
    component: FiatComponent,
  },
  {
    path: 'audiComponent',
    component: AudiComponent,
  },
  {
    path: 'fordComponent',
    component: FordComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FiatComponent,
    AudiComponent,
    FordComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
