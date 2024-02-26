import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  changeClassNameOfAnchorTagWithRespectoHrefValue() {
    debugger;
    const anchorTags = document.querySelectorAll('a');
    anchorTags.forEach((tag) => {
      if (tag.getAttribute('href') === this.location.path()) {
        tag.classList.remove('inactive');
        tag.classList.add('active');
      } else {
        tag.classList.remove('active');
        tag.classList.add('inactive');
      }
    });
  }
  
  constructor(private location: Location) {}
}
