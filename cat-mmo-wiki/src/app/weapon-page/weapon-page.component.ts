import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { Weapon } from '../data/weapons';
import { NgFor } from '@angular/common';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-weapon-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './weapon-page.component.html',
  styleUrl: './weapon-page.component.scss'
})
export class WeaponPageComponent {
  @Input()
  weapon!: Weapon;
  constructor(private articleService: ArticleService) {}

  changeArticle(newArticle: string) {
    this.articleService.updateCurrentArticleById(newArticle);
  }
}

