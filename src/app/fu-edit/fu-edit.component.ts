
import { Component, Output, Input, OnInit, AfterViewInit, OnDestroy, AfterViewChecked, EventEmitter } from '@angular/core';
import { Article }  from '../article'
import 'tinymce';
import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/spellchecker';
import 'tinymce/plugins/save';
import 'tinymce/themes/silver/theme';
declare var tinymce: any;

@Component({
  selector: 'app-fu-edit',
  templateUrl: './fu-edit.component.html',
  styleUrls: ['./fu-edit.component.css']
})
export class FuEditComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Input() articleInitial: Article;
  @Output() onEditorContentChange = new EventEmitter()
  private editor: any

  constructor() { }

  // ngOnInit() {
  // }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      height: 400,
      plugins: ['link', 'table', 'image'],
      toolbar: 'undo redo save fontselect fontsizeselect outdent indent image editimage imageoptions pagebreak spellchecker',
      language: 'zh_CN',
      language_url : '/assets/zh_CN.js',
      content_css: '/assets/skins/content/default/content.css',
      skin_url: '/assets/skins/ui/oxide',   // 这里是刚才移动的主题文件
      theme: 'silver',
      branding: false,
      setup: editor => { // 初始化前执行
        if (editor) {
          if (this.articleInitial && this.articleInitial.content) {
            console.log(editor)
            setTimeout(() => {
              editor.setContent(this.articleInitial.content)
            }, 1000);
          } else {
            setTimeout(() => {
              editor.setContent('')
            }, 1000);
          }
        }
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent()
          this.onEditorContentChange.emit(content)
        })
      }
    })
  }

  // ngAfterViewChecked() {
  //   if (this.editor) {
  //     if (this.articleInitial && this.articleInitial.content) {
  //       this.editor.setContent(this.articleInitial.content)
  //     } else {
  //       this.editor.setContent('')
  //     }
  //   }
  // }

  ngOnDestroy() {
    tinymce.remove(this.editor);        // 组件移除时销毁编辑器
  }

}
