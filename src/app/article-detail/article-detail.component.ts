import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  private article: String = '<h3 style="text-align: center;">辅导费</h3><p>大飒飒啊所发生的<br/></p><p><span style="color:#00b050">山东省功夫</span></p>';
  private articleId: String = '';
  private articles: any[] = [];
  private articleDetail: any = {}

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private articleSer: ArticlesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.articleId = params.get('articleId')
    })
    this.getArticleDetail()
    console.log(this.articleId)
  }

  getArticleDetail(): void{
    this.articleSer.getDetail(this.articleId)
      .subscribe((article) => this.articleDetail = article[0])
    console.log(this.articleDetail)
  }

  // 去编辑
  goEdit() {
    this.router.navigate(['/articleEdit', {
      articleId: this.articleId
    }])
  }

  goBack() {
    this.location.back()
  }

}
