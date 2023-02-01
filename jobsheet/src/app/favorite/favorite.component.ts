import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  // @Input() isFavorite = false;
  title = 'belajar angular';

  // post = {
  //   titles: 'inii post',
  //   isFavorite: true,
  // };
  coba = true;

  onClick() {
    this.coba = !this.coba;
  }
}
