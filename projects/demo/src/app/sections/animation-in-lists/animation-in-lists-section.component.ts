import { Component, signal } from '@angular/core';
import { CollapseComponent } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-animation-in-lists-section',
  standalone: true,
  imports: [CodeSnippetComponent, CollapseComponent],
  templateUrl: './animation-in-lists-section.component.html',
})
export class AnimationInListsSectionComponent {
  items = signal<string[]>([]);

  private nextId = 1;

  addItem(): void {
    this.items.update(list => [...list, `Item ${this.nextId++}`]);
  }

  removeItem(item: string): void {
    this.items.update(list => list.filter(i => i !== item));
  }

  reset(): void {
    this.items.set([]);
    this.nextId = 1;
  }

  readonly code = `
  @for (item of items(); track item; let i = $index) {
    <anim8-collapse easing="ease-out" duration="200" [delay]="i * 50">
      <div class="item-row">
        {{ item }}
        <button (click)="removeItem(item)">×</button>
      </div>
    </anim8-collapse>
  }
`;
}
