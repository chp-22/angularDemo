import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './article-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private page: Number = 0
  private originData: Article[] = []
  private nextData: Article[] = []

  constructor() { }

  // Observable将数据变成异步  获取第一页数据
  getArticlesData(): Observable<Article[]> {
    this.originData = ARTICLES.slice(0,5)
    return of(ARTICLES.slice(0,5));
  }

  // 请求下一页
  getNextData(): Observable<Article[]> {
    this.page = Number(this.page) + 1
    let aa = ARTICLES.slice(Number(this.page)*5, (Number(this.page)*5)+5)
    this.nextData = this.nextData.concat(aa)
    let totalData = this.originData.concat(this.nextData)
    return of(totalData)
  }

  // 按关键字搜索
  onSearch(val): Observable<Article[]> {
    let validData = ARTICLES.filter((item) => (item.title).indexOf(val) > 0)
    console.log(validData)
    return of(validData)
  }

  // 获取文章详情
  getDetail(id): Observable<Article[]> {
    let detail = ARTICLES.filter((item) => item.id == id)
    return of(detail)
  }

  // 新增一个文章
  addArticle(article): Observable<Article[]> {
    let allArticles = ARTICLES.concat(article)
    console.log(allArticles)
    return of(allArticles)
  }

  // 编辑一个文章
  editArticle(article): Observable<Article[]> {
    let idx = ARTICLES.findIndex((item) => item.id == article.id)
    ARTICLES[idx] = article
    console.log(ARTICLES)
    return of(ARTICLES)
  }

  // 商城
  getMallData(): Observable<Article[]> {
    return of(ARTICLES)
  }



}
