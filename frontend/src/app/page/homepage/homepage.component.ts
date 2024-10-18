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

  displayedDescription: string = "";
  descriptions: string[] = [
    "During my internship, I worked on two projects simultaneously: one involving an existing company product and another that I developed independently. I was able to apply my knowledge of Java Spring Boot in practice while also working with new technologies such as JavaFX for the frontend. In the second project, which I developed independently, I explored new areas like AI integration and utilized Java Spring Boot-compatible libraries, such as Apache POI.",
    "During my time in the apprentice program at Endava, I had the opportunity to work with a variety of frameworks, technologies, and programming languages. This included SQL data modeling, Java Spring Boot, .NET, Android development (Java/XML), as well as fundamental frontend concepts using JavaScript. This practical experience helped me expand my skill set and gain a deeper understanding of software development practices."
  ]

  constructor() { }

  ngOnInit(): void {
    this.displayedDescription = "During my internship, I worked on two projects simultaneously: one involving an existing company product and another that I developed independently. I was able to apply my knowledge of Java Spring Boot in practice while also working with new technologies such as JavaFX for the frontend. In the second project, which I developed independently, I explored new areas like AI integration and utilized Java Spring Boot-compatible libraries, such as Apache POI.";
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

  changeDescription(index: number): void {
    this.displayedDescription = this.descriptions[index];
  }

}