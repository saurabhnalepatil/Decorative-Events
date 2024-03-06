import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  currentSlide = 0;
  slides: any[] = [
    {
      label: 'First slide label',
      content: 'Some representative placeholder content for the first slide.',
      imageUrl: 'assets/images/img-1.png' // Replace with the path to your image
    },
    {
      label: 'Second slide label',
      content: 'Some representative placeholder content for the second slide.',
      imageUrl: 'assets/images/img-2.png' // Replace with the path to your image
    },
    {
      label: 'Third slide label',
      content: 'Some representative placeholder content for the third slide.',
      imageUrl: 'assets/slide3.jpg' // Replace with the path to your image
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change the interval (in milliseconds) as needed
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
