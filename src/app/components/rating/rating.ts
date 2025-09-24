import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [CommonModule],
  templateUrl: './rating.html',
  styleUrl: './rating.css'
})
export class Rating {
  @Input() rating: number = 0;
  @Input() max: number = 5;

  getHeartWidth(index: number): number {
    if (index < Math.floor(this.rating)) {
      return 100; // Full heart
    } else if (index === Math.floor(this.rating) && this.rating % 1 !== 0) {
      return (this.rating % 1) * 100; // Partial heart
    } else {
      return 0; // Empty heart
    }
  }
}