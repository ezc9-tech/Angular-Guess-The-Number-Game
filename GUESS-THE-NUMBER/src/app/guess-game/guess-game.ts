import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-game',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-game.html',
  styleUrl: './guess-game.scss',
})
export class GuessGame {
  userGuess: number = 0;
  feedbackMessage: string = ''
  secretNumber: number = Math.floor(Math.random() * 100) + 1;
  numberOfAttempts: number = 10;

  submitGuess() {
    if (this.userGuess < this.secretNumber) {
      this.feedbackMessage = 'Too Low! Try again.'
      this.numberOfAttempts--;
    } else if (this.userGuess > this.secretNumber) {
      this.feedbackMessage = 'Too High! Try again.'
      this.numberOfAttempts--;
    } else if (this.userGuess === this.secretNumber) {
      this.feedbackMessage = 'Congratulations! You guessed it right!'
    } else if (this.numberOfAttempts <= 0) {
      this.feedbackMessage = 'Game Over! You have run out of attempts. The number was ' + this.secretNumber;
    } else {
      this.feedbackMessage = 'Invalid input. Please enter a number between 1 and 100.'
    }

  }

}
