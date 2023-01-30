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
      { id: 1, name: 'Hulk' },
      { id: 2, name: 'Spiderman' },
      { id: 3, name: 'Captain America' },
      { id: 4, name: 'Dr Strange' },
      { id: 5, name: 'Iron Man' },
      { id: 6, name: 'Ant-man' },
      { id: 7, name: 'Deadpool' },
      { id: 8, name: 'Wolferine' },
      { id: 9, name: 'Thor' },
      { id: 10, name: 'Loki' },
      { id: 11, name: 'Medusa' },
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
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
