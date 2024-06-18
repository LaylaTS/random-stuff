import { Component, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article, Section } from '../data/articles';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() article!: Article
  constructor(private articleService: ArticleService) {}

  changeArticle(newArticle: string) {
    this.articleService.updateCurrentArticleById(newArticle);
  }
}
