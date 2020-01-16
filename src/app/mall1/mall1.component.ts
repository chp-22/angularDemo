import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-mall1',
  templateUrl: './mall1.component.html',
  styleUrls: ['./mall1.component.css']
})
export class Mall1Component implements OnInit, AfterViewInit {

  private mallDatas: any[] = []

  constructor(
    private articleService: ArticlesService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.getInitialData()
  }

  ngAfterViewInit() {
    this.onWater()
  }

  getInitialData() {
    this.articleService.getMallData()
        .subscribe((data) => this.mallDatas = data)
  }

  onWater() {
    var itemBox = this.elementRef.nativeElement.querySelector('.mall1_container');
    var item = this.elementRef.nativeElement.querySelectorAll('.item_box');
    var itemBoxW = itemBox.offsetWidth;
    var itemW = item[0].offsetWidth;
    var column = Math.floor(itemBoxW/itemW);
    var distance = (itemBoxW - itemW*column)/(column - 1);
    console.log(itemBoxW, column, distance)
    this.waterFull(item, column, itemW, distance);
  }

  waterFull(item, column, itemW, distance) {
    var arr = [];
    for(var i = 0;i < item.length;i++) {
                    
      if(i<column) {

          arr[i] = item[i].offsetHeight;
          
          item[i].style.left = (distance + itemW)*i + 'px';
          item[i].style.top = 0;    

      } else {
          var minI = this.getMin(arr).minI;
          var minV = this.getMin(arr).minV;
          item[i].style.left = minI * (distance + itemW) + 'px';
          item[i].style.top = arr[minI] + distance + 'px';
          console.log(arr[minI], distance)
          arr[minI] = arr[minI] + distance + item[i].offsetHeight;
      }
    } 
  }

  // 求出每行的最小高度
  getMin(arr) {
    var o = { minI: 0, minV: '' };
    o.minI = 0;
    o.minV = arr[0];
    console.log(arr)
    for(var i = 1;i<arr.length;i++) {
        if(arr[i] < o.minV) {
            o.minI = i;
            o.minV = arr[i];
        }
    }
    return o;
  }

}
