import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tag',
  template: `<span>{{tag}}</span>`,
  styles: [`
    span {
      display: inline-block;
      width: fit-content;
      padding: 0.2em;
      border-radius: 0.5em;
      background: linear-gradient(90deg, #FC466B, #3F5EFB);
      color: white;
      opacity: 0.7;
    }
  `]
})
export class TagComponent {
  @Input() tag: string;
}
