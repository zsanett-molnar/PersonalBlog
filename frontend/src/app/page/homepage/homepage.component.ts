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
  selectedDescription: number = 0;
  descriptionVisible: boolean = false;
  descriptions: string[] = [
    "During my internship, I worked on two projects simultaneously: one involving an existing company product and another that I developed independently. I was able to apply my knowledge of Java Spring Boot in practice while also working with new technologies such as JavaFX for the frontend. In the second project, which I developed independently, I explored new areas like AI integration and utilized Java Spring Boot-compatible libraries, such as Apache POI.",
    "During my time in the apprentice program at Endava, I had the opportunity to work with a variety of frameworks, technologies, and programming languages. This included SQL data modeling, Java Spring Boot, .NET, Android development (Java/XML), as well as fundamental frontend concepts using JavaScript. This practical experience helped me expand my skill set and gain a deeper understanding of software development practices."
  ]

  displayedEducation: string = "";
  selectedEducation: number = 0;
  educationVisible: boolean = false;
  education: string[] = [
    "Education 1",
    "Education 2"
  ]

  constructor() { }

  ngOnInit(): void {
    this.startTyping();
    this.descriptionVisible = true;
    this.educationVisible = true;
    this.displayedEducation = this.education[0];
    this.displayedDescription = this.descriptions[0];
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
    this.selectedDescription = index;
    this.descriptionVisible = false;

    setTimeout(() => {
      this.displayedDescription = this.descriptions[index];
      this.descriptionVisible = true;
    }, 300);
  }

  changeEducation(index: number): void {
    this.selectedEducation = index;
    this.educationVisible = false;

    setTimeout(() => {
      this.displayedEducation = this.education[index];
      this.educationVisible = true;
    }, 300);
  }

}