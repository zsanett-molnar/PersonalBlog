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
    `During my university journey at the <a href="https://ac.utcluj.ro/acasa.html" target="_blank">Technical University of Cluj-Napoca,</a> I explored a broad spectrum of` +
    " hardware and software disciplines, gaining a solid foundation in computer science and engineering. Throughout my studies," +
    " I primarily worked on individual projects, which allowed me to develop strong self-management and problem-solving skills." +
    " However, I also had opportunities to collaborate on team projects, where I strengthened my soft skills such as " +
    "communication, teamwork, and adaptability, which are essential in a collaborative environment. \n " +
    "Among the technologies I worked with, I spent the most time developing Java-based applications. This included creating" +
    " desktop applications and building web applications using Java Spring Boot, which helped me gain practical experience in " +
    " software development.",

    `In high school, I was part of a mathematics-informatics class, where I first got in touch with the world of informatics and developed my analytical skills. I participated in numerous mathematics competitions, reaching the national stage of the <a href="https://www.example-school-website.com" target="_blank">Transylvanian Hungarian Mathematics competition</a>` +
    `. Additionally, I earned my A2 <a href="https://www.auslandsschulwesen.de/DE/Deutsch-lernen/DSD/dsd_node.html" target="_blank">German language diploma</a>, further broadening my academic and cultural horizons.`
  ]

  displayedTechnologies: string[] = [];
  selectedTechnology: number = 0;
  technologiesVisible: boolean = false;
  technologies: { [experience: number]: string[] } = {
    0: ["Java Spring Boot", "JavaFX", "Apache POI", "Huggingface AI", "Unit Testing"],
    1: ["Java Spring Boot", ".NET", "Android", "Testing", "RPA with UiPath"]
  };
  constructor() { }

  ngOnInit(): void {
    this.startTyping();
    this.descriptionVisible = true;
    this.educationVisible = true;
    this.technologiesVisible = true;
    this.displayedEducation = this.education[0];
    this.displayedDescription = this.descriptions[0];
    this.displayedTechnologies = this.technologies[0];
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

    this.selectedTechnology = index;
    this.technologiesVisible = false;

    setTimeout(() => {
      this.displayedDescription = this.descriptions[index];
      this.displayedTechnologies = this.technologies[index];
      this.descriptionVisible = true;
      this.technologiesVisible = true;
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