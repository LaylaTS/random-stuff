import { Component } from '@angular/core';
import { IslandPageComponent } from '../island-page/island-page.component';
import { NgFor } from '@angular/common';
import { Island, islandArray } from '../data/islands';

@Component({
  selector: 'app-island-list',
  standalone: true,
  imports: [NgFor, IslandPageComponent],
  templateUrl: './island-list.component.html',
  styleUrl: './island-list.component.scss'
})
export class IslandListComponent {
  islands: Island[] = islandArray
}
