import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from '../app/articles/articles.component';
import { ArticleDetailComponent } from '../app/article-detail/article-detail.component';
import { ArticleAddComponent } from '../app/article-add/article-add.component';
import { ArticleEditComponent } from '../app/article-edit/article-edit.component';
import { MallComponent } from '../app/mall/mall.component';
import { Mall1Component } from '../app/mall1/mall1.component';
// import { TranHtmlPipe } from './tranHtml.pipe';
// import { UmberUnitPipe } from './umberUnit.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articleDetail', component: ArticleDetailComponent },
  { path: 'articleEdit', component: ArticleEditComponent },
  { path: 'articleAdd', component: ArticleAddComponent },
  { path: 'mall', component: MallComponent },
  { path: 'mall1', component: Mall1Component }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      //UmberUnitPipe,
   ]
})
export class AppRoutingModule { }
