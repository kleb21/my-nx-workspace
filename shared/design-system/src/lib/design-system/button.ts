import { Component, input } from '@angular/core';

@Component({
selector: 'lib-button',
  standalone: true,
  template: `
    <button
      class="ds-btn"
      [class.primary]="variant() === 'primary'"
      [class.secondary]="variant() === 'secondary'"
    >
      <ng-content />
    </button>
  `,
  styles: [`
    .ds-btn {
      padding: 8px 16px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-weight: 600;
    }

    .primary {
      background: #2563eb;
      color: white;
    }

    .secondary {
      background:rgb(122, 12, 12);
    }
  `]
})
export class Button {
  variant = input<'primary' | 'secondary'>('primary');
}
 