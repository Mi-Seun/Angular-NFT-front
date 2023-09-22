import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NftDetailComponent } from './pages/nft/nft-detail/nft-detail.component';
import { NftCreatComponent } from './pages/nft/nft-creat/nft-creat.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail', component: NftDetailComponent},
  {path: 'detail/:id', component: NftDetailComponent},
  {path: 'creat', component: NftCreatComponent},


  
  {path: '**', component: Error404Component}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
