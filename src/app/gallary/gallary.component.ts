import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  images: string[] = [
    "assets/images/about-us-1.png",
    "assets/images/about-us-2.png",
    "assets/images/photo-1.png",
    "assets/images/photo-2.png"
  ];
}

