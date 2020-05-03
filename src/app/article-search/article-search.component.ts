import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Article } from "../models/article";
import { ArticleService } from "../services/article.service";

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  private _result: Observable<Article[]>;
  private txt: string;

  constructor(private articleService: ArticleService) { }

  results(): Observable<Article[]> {
    return this._result;
  }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.txt = event.target.value;
  }

  search(): void {
    console.log(this.txt);
    this._result = this.articleService.search(this.txt);
  }

}
