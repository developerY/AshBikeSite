import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <header
      class="sticky top-0 z-40 w-full bg-pearl/95 backdrop-blur-md border-b border-mineral-line"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8"
      >
        <!-- Zone 1: Single text wordmark -->
        <a
          routerLink="/"
          (click)="closeMenu()"
          class="font-display text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean rounded-md px-1"
        >
          AshBike
        </a>

        <!-- Zone 2: 5 concise single-line nav links -->
        <nav
          aria-label="Primary Navigation"
          class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          <a
            routerLink="/"
            [routerLinkActiveOptions]="{exact: true}"
            routerLinkActive="text-ocean-deep underline decoration-ocean decoration-2 underline-offset-8"
            class="hover:text-ocean transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean rounded"
          >
            Overview
          </a>
          <a
            routerLink="/tech"
            routerLinkActive="text-ocean-deep underline decoration-ocean decoration-2 underline-offset-8"
            class="hover:text-ocean transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean rounded"
          >
            Tech & Apps
          </a>
          <a
            routerLink="/hardware"
            routerLinkActive="text-ocean-deep underline decoration-ocean decoration-2 underline-offset-8"
            class="hover:text-ocean transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean rounded"
          >
            Hardware
          </a>
          <a
            routerLink="/cities"
            routerLinkActive="text-ocean-deep underline decoration-ocean decoration-2 underline-offset-8"
            class="hover:text-ocean transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean rounded"
          >
            Cities
          </a>
          <a
            routerLink="/info"
            routerLinkActive="text-ocean-deep underline decoration-ocean decoration-2 underline-offset-8"
            class="hover:text-ocean transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean rounded"
          >
            About & Legal
          </a>
        </nav>

        <!-- Zone 3: 1 primary action + mobile menu button -->
        <div class="flex items-center gap-3 shrink-0">
          <a
            routerLink="/tech"
            fragment="route-planner"
            class="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-ocean hover:bg-ocean-deep rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
          >
            <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">route</mat-icon>
            <span>Plan a Ride</span>
          </a>

          <button
            type="button"
            (click)="toggleMenu()"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Toggle navigation menu"
            class="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-mineral-line bg-white text-slate-700 hover:bg-mineral transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean"
          >
            <mat-icon>{{ menuOpen() ? 'close' : 'menu' }}</mat-icon>
          </button>
        </div>
      </div>

      @if (menuOpen()) {
        <div class="md:hidden border-t border-mineral-line bg-pearl px-4 py-4 space-y-2">
          <a
            routerLink="/"
            (click)="closeMenu()"
            [routerLinkActiveOptions]="{exact: true}"
            routerLinkActive="bg-ocean-mist text-ocean-deep font-semibold"
            class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-mineral"
          >
            Overview
          </a>
          <a
            routerLink="/tech"
            (click)="closeMenu()"
            routerLinkActive="bg-ocean-mist text-ocean-deep font-semibold"
            class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-mineral"
          >
            Tech & Apps
          </a>
          <a
            routerLink="/hardware"
            (click)="closeMenu()"
            routerLinkActive="bg-ocean-mist text-ocean-deep font-semibold"
            class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-mineral"
          >
            Hardware
          </a>
          <a
            routerLink="/cities"
            (click)="closeMenu()"
            routerLinkActive="bg-ocean-mist text-ocean-deep font-semibold"
            class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-mineral"
          >
            Cities
          </a>
          <a
            routerLink="/info"
            (click)="closeMenu()"
            routerLinkActive="bg-ocean-mist text-ocean-deep font-semibold"
            class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-mineral"
          >
            About & Legal
          </a>
          <div class="pt-2">
            <a
              routerLink="/tech"
              fragment="route-planner"
              (click)="closeMenu()"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-ocean hover:bg-ocean-deep rounded-xl transition-colors"
            >
              <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">route</mat-icon>
              <span>Plan a Ride</span>
            </a>
          </div>
        </div>
      }
    </header>
  `,
})
export class Navbar {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
