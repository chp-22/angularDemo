import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
// import { UMeditorComponent, UMeditorModule } from 'ngx-umeditor';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  // @ViewChild('full', { static: false }) full: UMeditorComponent

  private articleId: String = ''
  // private articleDetail: any = {}

  private types: any[] = [ // 文章分类
    { id: 0, name: '武侠' },
    { id: 1, name: '文学' },
    { id: 2, name: '教课书' }
  ]
  private articleDetail: any = {
    id: 0,
    title: '',
    type: 0,
    img: '',
    desc: '',
    date: 0,
    author: '',
    content: '',
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private articleSer: ArticlesService,
  ) { }

  ngOnInit() {
    // console.log(this.full) 获取子组件
    this.articleDetail.type = this.types[0].name
    this.route.paramMap.subscribe((param) => this.articleId = param.get('articleId'))
    this.getArticleDetail()
    console.log(this.articleDetail)
  }

  keyupHandler(val) {
    console.log(val)
  }

    // 选择文章分类
    onType(val) {
      let chose = this.types.filter((item) => item.id == val)
      this.articleDetail.type = chose[0].id
    }

  getArticleDetail(): void {  
    this.articleSer.getDetail(this.articleId)
        .subscribe((article) => this.articleDetail = article[0])
  }

  goSave() {
    this.articleSer.editArticle(this.articleDetail)
            .subscribe(() => {this.router.navigate(['/articles'])})
    console.log(this.articleDetail)
  }

  goBack() {
    this.location.back()
  }

}
