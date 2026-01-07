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
  guessedNumber ?: number;
  feedbackMessage: string = ''
  attemptsLeft: number = 10;
  gameOver = false;
  secretNumber = this.generateRandomNumber();

  private static readonly MAZ_ATTEMPTS = 10;
  private static readonly MAX_NUMBER = 100;

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessGame.MAX_NUMBER) + 1;
  }

public isValidGuess(guess?: number): boolean {
  return(
    guess !== undefined &&
    guess >= 1 &&
    guess <= GuessGame.MAX_NUMBER
  )
}

  submitGuess() {
    if (!this.isValidGuess(this.guessedNumber)) {
      this.feedbackMessage = `Enter a number between 1 and ${GuessGame.MAX_NUMBER}`;
      return
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }

  private evaluateGuess() {
    if(this.guessedNumber === this.secretNumber) {
      this.endGame(true)
    } else if (this.attemptsLeft === 0) {
      this.endGame(false);
    } else {
      this.feedbackMessage = this.guessedNumber! > this.secretNumber
      ? "Too High! Try again"
      : "Too Low! Try again";
    }

  }

  private endGame(isWin?: boolean): void {
    this.gameOver = true;
    this.feedbackMessage = isWin
    ? 'Congratulations! You guessed the correct Number'
    : `Sorry you ran out of attempts and lost the game. The correct number was ${this.secretNumber}`
  }

  resetGame(): void {
    this.secretNumber = this.generateRandomNumber()
    this.attemptsLeft = GuessGame.MAZ_ATTEMPTS;
    this.gameOver = false;
    this.feedbackMessage = '';
    this.guessedNumber = undefined;
  }
}
