import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'frontend';
  darkTheme = true;
  isMenuOpen = false;


  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('light-theme');
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
