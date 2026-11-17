import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <footer class="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div class="md:col-span-5 space-y-3">
            <a
              routerLink="/"
              class="font-display text-xl font-bold tracking-tight text-slate-900 inline-block"
            >
              AshBike
            </a>
            <p class="text-sm leading-relaxed text-slate-600 max-w-sm">
              We hope to have the world fall in love with biking. Saving the Earth one bike at a
              time through smartphone fusion, regenerative hardware, and human-scale cities.
            </p>
            <p class="text-xs text-slate-500">
              ZoeWave / AshBike Initiative · Local-First Ride Privacy
            </p>
          </div>

          <div class="md:col-span-2 space-y-2.5 text-sm">
            <h3 class="font-display font-semibold text-slate-900 text-sm">Platform</h3>
            <ul class="space-y-2">
              <li>
                <a routerLink="/" class="hover:text-ocean transition-colors">Overview</a>
              </li>
              <li>
                <a routerLink="/tech" class="hover:text-ocean transition-colors">Tech & Apps</a>
              </li>
              <li>
                <a routerLink="/hardware" class="hover:text-ocean transition-colors">Hardware</a>
              </li>
              <li>
                <a routerLink="/cities" class="hover:text-ocean transition-colors">Cities</a>
              </li>
            </ul>
          </div>

          <div class="md:col-span-3 space-y-2.5 text-sm">
            <h3 class="font-display font-semibold text-slate-900 text-sm">Concepts & Apps</h3>
            <ul class="space-y-2">
              <li>
                <a routerLink="/tech" class="hover:text-ocean transition-colors"
                  >AshBike & Health Connect</a
                >
              </li>
              <li>
                <a routerLink="/tech" class="hover:text-ocean transition-colors"
                  >Swift Bike Shift & GoSwift</a
                >
              </li>
              <li>
                <a routerLink="/hardware" class="hover:text-ocean transition-colors"
                  >Regenerative Anti-Lock Brakes</a
                >
              </li>
              <li>
                <a routerLink="/hardware" class="hover:text-ocean transition-colors"
                  >H₂ E-Bike Concept</a
                >
              </li>
            </ul>
          </div>

          <div class="md:col-span-2 space-y-2.5 text-sm">
            <h3 class="font-display font-semibold text-slate-900 text-sm">Info & Legal</h3>
            <ul class="space-y-2">
              <li>
                <a routerLink="/info" class="hover:text-ocean transition-colors"
                  >Essays & Contact</a
                >
              </li>
              <li>
                <a
                  routerLink="/info"
                  fragment="legal"
                  class="hover:text-ocean transition-colors"
                  >App Privacy Policy</a
                >
              </li>
              <li>
                <a
                  routerLink="/info"
                  fragment="legal"
                  class="hover:text-ocean transition-colors"
                  >EULA & Ride Safety</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500"
        >
          <p>
            © 2026 AshBike & ZoeWave. Ride safely—review routes and metrics only when stationary.
          </p>
          <p class="whitespace-nowrap">Android · iOS · WearOS · Smart Glass HUD</p>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {}
