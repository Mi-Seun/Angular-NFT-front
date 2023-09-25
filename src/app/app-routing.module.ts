import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NftDetailComponent } from './pages/nft/nft-detail/nft-detail.component';
import { NftCreatComponent } from './pages/nft/nft-creat/nft-creat.component';
import { Error404Component } from './pages/error404/error404.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { NftListComponent } from './pages/nft/nft-list/nft-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nft-detail', component: NftDetailComponent},
  {path: 'nft-detail/:id', component: NftDetailComponent},
  {path: 'nft-list', component: NftListComponent},
  {path: 'nft-list/:id', component: NftListComponent},
  {path: 'creat', component: NftCreatComponent},
  {path: 'creat/:id', component: NftCreatComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'category-list/:id', component: CategoryListComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-list/:id', component: UserListComponent},
  
  {path: '**', component: Error404Component}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
