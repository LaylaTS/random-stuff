import { Component, Input, OnInit, } from '@angular/core';
import { Article } from '../data/articles';
import { ArticleService } from '../article.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-article-search',
  standalone: true,
  imports: [NgFor],
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent implements OnInit {
  @Input() articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchQuery: string = '';

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.filteredArticles = this.articles;
  }

  onSearch(event: any) {
    const value = event.target.value;
    this.searchQuery = value;
    if (this.searchQuery.trim()) {
      this.filteredArticles = this.articles.filter(article =>
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredArticles = this.articles;
    }
  }

  changeArticle(newArticleId: string) {
    this.articleService.updateCurrentArticleById(newArticleId);
  }
}
