import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { IslandListComponent } from './island-list/island-list.component';
import { ArticleComponent } from './article/article.component';
import { NgIf } from '@angular/common';
import { ArticleService } from './article.service';
import { Article, articleArray } from './data/articles';
import { ArticleSearchComponent } from './article-search/article-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeaponListComponent, IslandListComponent, NgIf, ArticleComponent, ArticleSearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  
})
export class AppComponent implements OnInit {
  title = 'cat-mmo-wiki';
  pageList: number = 0;
  currentArticle?: Article;
  articles = articleArray;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.currentArticle$.subscribe(article => this.currentArticle = article);
    this.articleService.pageList$.subscribe(pageList => this.pageList = pageList);
    this.pageList = 0;
  }

  updateCurrentArticleById(id: string) {
    this.articleService.updateCurrentArticleById(id);
  }
}
