import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article, Section, articleArray } from '../app/data/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = articleArray;

  private currentArticleSubject = new BehaviorSubject<Article>(this.articles[0]);
  currentArticle$ = this.currentArticleSubject.asObservable();

  private pageListSubject = new BehaviorSubject<number>(-1);
  pageList$ = this.pageListSubject.asObservable();

  updateCurrentArticleById(id: string) {
    const article = this.articles.find(article => article.id === id);
    if (article) {
      this.currentArticleSubject.next(article);
      this.updatePageList(-1); 
    }
  }

  updatePageList(value: number) {
    this.pageListSubject.next(value);
  }
}
