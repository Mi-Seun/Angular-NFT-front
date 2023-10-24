import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { NftListComponent } from './pages/nft/nft-list/nft-list.component';
import { NftDetailComponent } from './pages/nft/nft-detail/nft-detail.component';
import { NftCreatComponent } from './pages/nft/nft-creat/nft-creat.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { SubcategoryListComponent } from './pages/sub-category/sub-category-list/sub-category-list.component';
import { EthComponent } from './pages/eth/eth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nft-detail', component: NftDetailComponent },
  { path: 'nft-detail/:id', component: NftDetailComponent },
  { path: 'nft-list', component: NftListComponent },
  { path: 'nft-list/:id', component: NftListComponent },
  { path: 'creat', component: NftCreatComponent },
  { path: 'creat/:id', component: NftCreatComponent },
  { path: 'sub-category-list', component: SubcategoryListComponent },
  { path: 'sub-category-list/:id', component: SubcategoryListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-list/:id', component: UserListComponent },
  { path: 'user-detail', component: UserListComponent },
  { path: 'user-detail/:id', component: UserListComponent },
  { path: 'eth', component: EthComponent },


  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
