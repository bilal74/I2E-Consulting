import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  navigateToSolution(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    if (selectedValue) {
      this.router.navigateByUrl(selectedValue);
    }
  }
}
