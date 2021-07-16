import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from './hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'heroes-compo',
  styleUrls: ['./heroes.css'],
  templateUrl: './heroes.html',
})
export class HeroesCompo implements OnInit {
  // selectedHero?: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };

  heroes: Hero[] = [];

  constructor(private heroService: HeroService,private messageService: MessageService) {}

  ngOnInit() {
  
    this.getHeroes();
  }

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  
  
  }
}
