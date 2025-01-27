import { Component, OnInit } from '@angular/core';
import { CarouselComponent, CarouselControlComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';


@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent implements OnInit {

  slides: any[] = new Array(2).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/carousel/energy-storyset.png',
      title: "Energy Management System",
      subtitle: "description1 wdQEGWEG",
      href: "https://github.com/zsanett-molnar/Energy-Management-System"
    };
    this.slides[1] = {
      src: './assets/carousel/trip.png',
      title: "Adventure Avenue",
      subtitle: "description1 wdQEGWEG",
      href: "https://github.com/zsanett-molnar/AdventureAvenue"
    };

  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
