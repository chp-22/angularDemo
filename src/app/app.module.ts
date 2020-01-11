import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { BooksComponent } from './books/books.component';
import { MallComponent } from './mall/mall.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
   declarations: [
      AppComponent,
      ArticlesComponent,
      ArticleAddComponent,
      ArticleEditComponent,
      ArticleDetailComponent,
      BooksComponent,
      MallComponent,
      ArticleListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
