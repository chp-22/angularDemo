import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from '../app/articles/articles.component';
import { ArticleDetailComponent } from '../app/article-detail/article-detail.component';
import { ArticleAddComponent } from '../app/article-add/article-add.component';
import { ArticleEditComponent } from '../app/article-edit/article-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articleDetail', component: ArticleDetailComponent },
  { path: 'articleEdit', component: ArticleEditComponent },
  { path: 'articleAdd', component: ArticleAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
