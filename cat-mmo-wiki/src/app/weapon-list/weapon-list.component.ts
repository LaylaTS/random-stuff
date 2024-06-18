import { Component } from '@angular/core';
import { NgFor} from '@angular/common';
import { weaponArray } from '../data/weapons';
import { WeaponPageComponent } from '../weapon-page/weapon-page.component';

@Component({
  selector: 'app-weapon-list',
  standalone: true,
  imports: [NgFor, WeaponPageComponent],
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.scss'
})
export class WeaponListComponent {
weapons = weaponArray
}
