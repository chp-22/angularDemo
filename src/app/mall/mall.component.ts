import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-mall',
  templateUrl: './mall.component.html',
  styleUrls: ['./mall.component.css']
})
export class MallComponent implements OnInit, AfterViewInit {

  private mallDatas: any[] = []
  private leftData: any[] = []
  private rightData: any[] = []

  constructor(
    private articleService: ArticlesService
  ) { }

  ngAfterViewInit() {

  }

  ngOnInit() {
    var _this = this
    this.getInitialData()
    // return new Promise((resolve, reject) => {
    //   this.render(_this.mallDatas, 0, () => {
    //     resolve()
    //   })
    // })
    this.render(_this.mallDatas, 0)
  }

  getInitialData() {
    this.articleService.getMallData()
        .subscribe((data) => this.mallDatas = data)
  }

  render(items, i) {
    var _this = this
    if (items.length > i) {
      let docl = document.getElementById('left')
      let docr = document.getElementById('right')
      console.log(docl.offsetHeight,docr.offsetHeight)
      if (docl.offsetHeight <= docr.offsetHeight) {
        items[i].positionCon = 'left'
        console.log('left')
      } else {
        items[i].positionCon = 'right'
      }
      setTimeout(function() {
        console.log(items)
        _this.render(items, ++i)
      },500)
      // this.render(items, ++i, onComplete)
    } else {
      // onComplete && onComplete() 
    }
  }

}
