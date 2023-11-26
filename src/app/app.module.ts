import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NftCreatComponent } from './pages/nft/nft-creat/nft-creat.component';
import { Error404Component } from './pages/error404/error404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NftListComponent } from './pages/nft/nft-list/nft-list.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { SubcategoryListComponent } from './pages/sub-category/sub-category-list/sub-category-list.component';
import { NftDetailComponent } from './pages/nft/nft-detail/nft-detail.component';
import { EthComponent } from './pages/eth/eth.component';
import { LoginComponent } from './pages/login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Error404Component,
    NftCreatComponent,
    NftListComponent,
    UserListComponent,
    SubcategoryListComponent,
    NftDetailComponent,
    EthComponent,
    LoginComponent,
    AdminComponent

  ],
  imports: [

    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
