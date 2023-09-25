import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NftDetailComponent } from './pages/nft/nft-detail/nft-detail.component';
import { NftCreatComponent } from './pages/nft/nft-creat/nft-creat.component';
import { Error404Component } from './pages/error404/error404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { NftListComponent } from './pages/nft/nft-list/nft-list.component';
import { CategoryDetailComponent } from './pages/category/category-detail/category-detail.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NftDetailComponent,
    Error404Component,
    NftCreatComponent,
    CategoryListComponent,
    NftListComponent,
    CategoryDetailComponent,
    UserListComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
