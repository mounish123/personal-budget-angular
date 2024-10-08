// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MenuComponent } from './menu/menu.component';
// import { HeroComponent } from './hero/hero.component';
// import { FooterComponent } from './footer/footer.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { ArticleComponent } from './article/article.component';
// import { AboutComponent } from './about/about.component';
// import { LoginComponent } from './login/login.component';
// import { P404Component } from './p404/p404.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     MenuComponent,
//     HeroComponent,
//     FooterComponent,
//     HomepageComponent,
//     ArticleComponent,
//     AboutComponent,
//     LoginComponent,
//     P404Component
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ContactComponent } from './contact/contact.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    HomepageComponent,
    ArticleComponent,
    AboutComponent,
    LoginComponent,
    P404Component,
    BreadcrumbsComponent,
    ContactComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withFetch()), // Enable fetch API
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
