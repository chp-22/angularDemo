import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UMeditorModule } from 'ngx-umeditor';
import { TranHtmlPipe } from '../app/tranHtml.pipe';
import { TestDirective } from '../app/test.directive';
import { PipeModuleModule } from '../app/pipeModule/pipeModule.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { BooksComponent } from './books/books.component';
import { MallComponent } from './mall/mall.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FuEditComponent } from './fu-edit/fu-edit.component';
import { Mall1Component } from './mall1/mall1.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
   declarations: [
      AppComponent,
      ArticlesComponent,
      ArticleAddComponent,
      ArticleEditComponent,
      ArticleDetailComponent,
      BooksComponent,
      MallComponent,
      ArticleListComponent,
      //TranHtmlPipe,
      //TestDirective,
      FuEditComponent,
      Mall1Component,
      MyComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      UMeditorModule.forRoot(),
      PipeModuleModule
   ],
   exports: [
      //TranHtmlPipe\r\n//TestDirective
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
