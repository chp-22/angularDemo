import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private activedNav:string = '文章';
  private navs: any[] = [
    { name: '文章', id: 0, navRoute: '/articleList' },
    { name: '书局', id: 1, navRoute: '/books' },
    { name: '商城', id: 2, navRoute: '/mall' },
  ]
  // private rooterChange: any;
  private articles: any[] = [];
  private subscribeScroll: any;
  private seoCon: String = ''; // 搜索关键字

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
  ) {
    
  }

  ngOnInit() {
    // 这是同步操作，但现实中从远端获取数据，必然是异步操作，所以写法要变,采用订阅的方式
    // this.articles = this.articlesService.getArticlesData() 
    this.getData()
    
    let contentDiv = document.getElementById('articleCon')
    this.subscribeScroll = fromEvent(contentDiv, 'scroll') // fromEvent监听事件
            .subscribe((event) => this.windowScroll())
    
  }

  getData(): void { 
    this.articlesService.getArticlesData()
            .subscribe(articles => this.articles = articles)
  }

  scollPostion() {
    var t, l, w, h;
    let contentDiv = document.getElementById('articleCon')
    if (contentDiv && contentDiv.scrollTop) {
        t = contentDiv.scrollTop;
        l = contentDiv.scrollLeft;
        w = contentDiv.scrollWidth;
        h = contentDiv.scrollHeight;
    }
    return {
        top: t,
        left: l,
        width: w,
        height: h
    };
  }

  windowScroll() {
    let contentDiv = document.getElementById('articleCon')
    let scrollTop = this.scollPostion().top;
    let clientH = contentDiv.clientHeight;
    let scrollH = this.scollPostion().height;
    if (scrollTop + clientH >= scrollH) {
      console.log('触底啦')
      this.onNext()
    } else {
      console.log('还未触底');
    }

  }

  // 下一页数据
  onNext() {
    this.articlesService.getNextData()
            .subscribe(articles => this.articles = articles)
    console.log(this.articles)
  }

  // 搜索
  onSeo() {
    if (this.seoCon) {
      this.articlesService.onSearch(this.seoCon)
            .subscribe(articles => this.articles = articles)
    } else {
      this.getData()
    }
  }


  // ngOnDestroy() {
  //   if (this.rooterChange) {
  //     this.rooterChange.unsubscribe();
  //   }
  // }

  // 监听路由变化
  // listenRouteChange() {
  //   this.rooterChange = this.router.events.subscribe((event) =>{
  //     if (event instanceof NavigationEnd) {
  //       let nowUrl = event.url.slice(1)
  //       let nowNav = ''
  //       if (nowUrl == 'articleList') {
  //         nowNav = '文章'
  //       } else if (nowUrl == 'books') {
  //         nowNav = '书局'
  //       }  else if (nowUrl == 'mall') {
  //         nowNav = '商城'
  //       }
  //       this.activedNav = nowNav
  //     }
  //   })
  // }

  // 导航点击事件
  onNav(val) {
    this.activedNav = val.name
    // this.router.navigate([val.navRoute])
    // this.listenRouteChange()
  }

  
  //  新建文章
  onAdd() {
    this.router.navigate(['/articleAdd'])
  }


}
