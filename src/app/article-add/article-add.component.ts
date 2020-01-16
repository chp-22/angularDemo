import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgModule, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article';
import { ArticlesService } from '../articles.service'

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css'],
})
export class ArticleAddComponent implements OnInit {

  private rooterChange: any;

  private testNumber: Number = 3403;
  private testun: String = '---测试管道';
  private testDirection: Boolean = true; // 通过指令，true时隐藏，false时显示

  private types: any[] = [ // 文章分类
    { id: 0, name: '武侠' },
    { id: 1, name: '文学' },
    { id: 2, name: '教课书' }
  ]
  private articleInfo: any = {
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
    private articleServie: ArticlesService
  ) { }

  ngOnInit() {
    this.articleInfo.type = this.types[0].name
  }


  // 获取编辑器内容
  keyupHandler(val) {
    this.articleInfo.content = val
  }

  // 选择文章分类
  onType(val) {
    let chose = this.types.filter((item) => item.id == val)
    this.articleInfo.type = chose[0].name
  }

  // 监听路由变化
  listenRouteChange() {
    this.rooterChange = this.router.events.subscribe((event) =>{
      if (event instanceof NavigationEnd) {
        console.log('xxx')
      }
    })
  }

  goSave() {
    this.articleInfo.date = new Date()
    this.articleServie.addArticle(this.articleInfo)
            .subscribe(() => {this.location.back()})
    console.log(this.articleInfo)
  }

  goBack() {
    // this.router.navigate(['/articles'])
    this.location.back()
    this.listenRouteChange()
  }

  

}
