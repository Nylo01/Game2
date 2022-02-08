import { Component, OnInit } from '@angular/core';
import { Game } from '../game2';
import { GAMEService } from '../services/game.service'; 
@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

  game: Game [] = []

  constructor(private GAMEService: GAMEService) {}
  getGame() {
    this.GAMEService.getGame().subscribe((Game: Game[]) => {
      this.game = Game;
    });
  }

  ngOnInit() {
    this.getGame();
  }

}
