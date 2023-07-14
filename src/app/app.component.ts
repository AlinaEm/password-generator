import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  includeLetters: Boolean = false;
  includeNumbers: Boolean = false;
  includeCapitalLetters: Boolean = false;
  includeSymbols: Boolean = false;
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }


  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseCapitalLetters() {
    this.includeCapitalLetters = !this.includeCapitalLetters;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      this.length = 0;
    }
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@_#&*';
    const capitalLeters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    if (this.includeCapitalLetters) {
      validChars += capitalLeters;
    }

    let generatedPassword = '';

    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword +=  validChars[index];
    }

    this.password = generatedPassword;
  }
}
