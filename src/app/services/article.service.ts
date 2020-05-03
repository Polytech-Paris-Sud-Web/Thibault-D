import { Injectable } from '@angular/core';
import { Article } from "../models/article";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { RawArticle } from "../models/raw-article";

@Injectable()
export class ArticleService {

  private _article: Observable<Article[]>;

  constructor(private http: HttpClient) {
  }

  public get(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public search(txt: string): Observable<Article[]> {
    if (txt && txt.length > 0)
      return this.http.get<Article[]>("http://localhost:3000/articles?q=" + txt);
    else
      return new Observable<Article[]>();

  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/articles/${id}`);
  }

  public add(newArticle: RawArticle): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles/", newArticle);
  }
}
