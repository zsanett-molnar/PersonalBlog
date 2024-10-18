import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  fullText: string = 'Hello, this is '
  name: string = 'Zsanett';
  dot: string = '.'
  displayText: string = '';
  displayedName: string = '';
  displayedDot: string = '';
  typingSpeed: number = 200;
  index: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    if (this.index < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.startTyping(), this.typingSpeed);
    }
    else {
      this.index = 0;
      this.typeName();
    }
  }

  typeName(): void {
    if (this.index < this.name.length) {
      this.displayedName += this.name.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeName(), this.typingSpeed);
    }
    else {
      this.displayedDot += '.';
    }
  }

}