import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Size } from '../../types/authenticate.type';

@Component({
  selector: 'lib-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() isLoading = true;
  @Input() size: Size = 'medium';

  get sizeClass(): string {
    return this.size;
  }
}
