import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-resilient-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="relative w-full h-full overflow-hidden bg-mineral" [class]="wrapperClass()">
      @if (!failed()) {
        <img
          [src]="src()"
          [alt]="alt()"
          referrerpolicy="no-referrer"
          (error)="onError()"
          class="w-full h-full object-cover transition-transform duration-500 ease-out"
          [class]="imgClass()"
        />
      } @else {
        <div
          class="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-pearl via-seaglass-mist to-ocean-mist text-slate-600"
        >
          <mat-icon class="text-ocean mb-2">directions_bike</mat-icon>
          <p class="text-sm font-medium text-slate-800">{{ fallbackTitle() || alt() }}</p>
          <p class="text-xs text-slate-500 mt-1">AshBike Visual Showcase</p>
        </div>
      }
    </div>
  `,
})
export class ResilientImage {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly fallbackTitle = input<string>('');
  readonly wrapperClass = input<string>('');
  readonly imgClass = input<string>('');

  protected readonly failed = signal(false);

  protected onError(): void {
    this.failed.set(true);
  }
}
