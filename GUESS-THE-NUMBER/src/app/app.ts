import { Component, signal } from '@angular/core';
import { GuessGame } from './guess-game/guess-game';

@Component({
  selector: 'app-root',
  imports: [GuessGame],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
