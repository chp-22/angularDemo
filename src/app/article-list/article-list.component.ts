import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() articleData: any[]

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  goDetail(val) {
    this.router.navigate(['/articleDetail', {
      articleId: val
    }])
  }

}
