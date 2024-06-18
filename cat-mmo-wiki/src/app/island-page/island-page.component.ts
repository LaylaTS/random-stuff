import { Component, Input } from '@angular/core';
import { Island } from '../data/islands';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-island-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './island-page.component.html',
  styleUrl: './island-page.component.scss'
})
export class IslandPageComponent {
  @Input() island!: Island
}
