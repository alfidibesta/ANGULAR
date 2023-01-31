import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // constructor() {}

  createDb() {
    const heroes = [
      { id: 11, name: 'besta' },
      { id: 12, name: 'alfidi' },
      { id: 13, name: 'adam' },
      { id: 14, name: 'husain' },
      { id: 15, name: 'muluk' },
      { id: 16, name: 'mulki' },
      { id: 17, name: 'sinta' },
      { id: 18, name: 'jojo' },
      { id: 19, name: 'messi' },
      { id: 20, name: 'ronaldo' },
      { id: 21, name: 'neymar' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
