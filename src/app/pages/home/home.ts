import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {
  APP_SUITE,
  ASHBIKE_IMAGES,
  SUSTAINABILITY_BENEFITS,
} from '../../data/ashbike-data';
import {ResilientImage} from '../../components/resilient-image/resilient-image';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule, ResilientImage],
  template: `
    <!-- Sunlit Split Hero (Original Crisp White + Emerald + Slate) -->
    <section class="bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div class="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div class="space-y-6">
              <p class="text-sm font-medium text-emerald-700 tracking-tight">
                AshBike · ZoeWave Urban Mobility Initiative
              </p>
              <h1
                class="font-display font-bold text-slate-900 tracking-tight leading-[1.06] text-4xl sm:text-5xl lg:text-[3.5rem]"
              >
                Fall in love with biking, one ride at a time.
              </h1>
              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                We are all athletes using our energy to save our planet and ourselves. AshBike
                fuses everyday smartphones with intelligent bicycles, regenerative brakes, and
                human-scale city infrastructure.
              </p>
            </div>

            <div class="space-y-6">
              <div class="flex flex-wrap items-center gap-4">
                <a
                  routerLink="/tech"
                  class="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  <mat-icon class="!text-[19px] !w-[19px] !h-[19px] leading-none">
                    explore
                  </mat-icon>
                  <span>Explore Smartphone Fusion</span>
                </a>
                <a
                  routerLink="/cities"
                  class="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-50 hover:bg-mineral border border-slate-200 rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <span>Rethinking Cities</span>
                  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">
                    arrow_forward
                  </mat-icon>
                </a>
              </div>

              <p class="text-xs text-slate-500">
                Android · iOS · WearOS · Google Health Connect · Smart Glass HUD
              </p>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div
              class="h-full min-h-[300px] lg:min-h-[440px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100"
            >
              <app-resilient-image
                [src]="images.hero"
                alt="Sunlit commuter bicycle with smartphone cockpit parked on a bright stone city plaza"
                fallbackTitle="Sunlit AshBike Commuter"
                wrapperClass="h-full"
                imgClass="lg:h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Full-Width 4-Column Impact Strip -->
        <div
          class="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <div>
            <p class="font-display text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              0 g/km
            </p>
            <p class="text-sm font-medium text-slate-800 mt-1">Tailpipe Emissions</p>
            <p class="text-xs text-slate-500 mt-0.5">Clean air across daily commutes</p>
          </div>
          <div>
            <p class="font-display text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              8 Sensors
            </p>
            <p class="text-sm font-medium text-slate-800 mt-1">Bicycle Brain Fusion</p>
            <p class="text-xs text-slate-500 mt-0.5">Pocket intelligence turned cockpit</p>
          </div>
          <div>
            <p class="font-display text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              10 Bikes
            </p>
            <p class="text-sm font-medium text-slate-800 mt-1">Per Car Stall Footprint</p>
            <p class="text-xs text-slate-500 mt-0.5">Vertical PEZ-style Bike Towers</p>
          </div>
          <div>
            <p class="font-display text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              100% Local
            </p>
            <p class="text-sm font-medium text-slate-800 mt-1">On-Device Ride Data</p>
            <p class="text-xs text-slate-500 mt-0.5">Zero external tracking servers</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Asymmetric Bento Grid: Core AshBike Pillars (with Pearl, Mineral, Sea-Glass & Ocean accents) -->
    <section class="bg-slate-50 border-b border-slate-200 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-12 space-y-3">
          <p class="text-sm font-medium text-emerald-700">01. Core Architecture</p>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Saving the Earth one bike at a time.
          </h2>
          <p class="text-base text-slate-600 leading-relaxed">
            Four interconnected ideas—intelligent software, energy-recovering hardware, clean
            propulsion concepts, and vertical urban space—built to make cycling irresistible.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Featured 2-column Bento Card -->
          <div
            class="lg:col-span-2 bg-pearl rounded-2xl border border-mineral-line overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <div class="p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div class="space-y-3">
                <p class="text-xs font-medium text-slate-500">
                  Smartphone / Bicycle Fusion · Android & iOS
                </p>
                <h3 class="font-display text-2xl font-bold text-slate-900 tracking-tight">
                  From Pocket to Pedal: Your Phone as Bicycle Brain
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Leverage GPS, barometers, gyroscopes, and cameras already in your pocket for
                  real-time wind forecasts, crash detection, collision alerts, and Smart Glass HUD
                  cues.
                </p>
              </div>
              <div class="pt-2">
                <a
                  routerLink="/tech"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span>Inspect Sensor Suite & Apps</span>
                  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">
                    arrow_forward
                  </mat-icon>
                </a>
              </div>
            </div>
            <div class="min-h-[240px] bg-slate-100">
              <app-resilient-image
                [src]="images.cockpit"
                alt="Smartphone mounted cleanly on minimalist bicycle handlebars showing bright route map"
                fallbackTitle="Bicycle Brain Cockpit"
                wrapperClass="h-full"
              />
            </div>
          </div>

          <!-- Vertical Bike Tower Bento Card (Sea-Glass Green accent) -->
          <div class="bg-white rounded-2xl border border-mineral-line p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <p class="text-xs font-medium text-seaglass">Urban Parking · Micro-Mobility</p>
              <h3 class="font-display text-2xl font-bold text-slate-900 tracking-tight">
                Vertical Bike Tower
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Bike parking reimagined—just like a PEZ dispenser. An automated street-level
                elevator stacks bikes vertically, clearing sidewalks for cafés and pedestrians
                while shielding rides from theft and rain.
              </p>
            </div>
            <div>
              <a
                routerLink="/cities"
                class="inline-flex items-center gap-2 text-sm font-semibold text-seaglass hover:text-seaglass-deep transition-colors"
              >
                <span>Try Tower Simulator</span>
                <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">
                  arrow_forward
                </mat-icon>
              </a>
            </div>
          </div>

          <!-- Regenerative Front Brakes (Emerald primary accent) -->
          <div class="bg-white rounded-2xl border border-mineral-line p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <p class="text-xs font-medium text-emerald-700">Electric Brakes · Anti-Lock Safety</p>
              <h3 class="font-display text-2xl font-bold text-slate-900 tracking-tight">
                Regenerative Front Braking
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Replaces friction pads on the front wheel with electromagnetic generators. Harvests
                kinetic energy to charge phones and lights while preventing dangerous front-wheel
                lockups.
              </p>
            </div>
            <div>
              <a
                routerLink="/hardware"
                class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <span>Simulate Brake Harvest</span>
                <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">
                  arrow_forward
                </mat-icon>
              </a>
            </div>
          </div>

          <!-- H2 E-Bike Concept (Deep Ocean Blue accent) -->
          <div
            class="lg:col-span-2 bg-pearl rounded-2xl border border-mineral-line overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <div class="min-h-[240px] bg-slate-100 order-2 md:order-1">
              <app-resilient-image
                [src]="images.h2Bike"
                alt="Sleek hydrogen-electric concept bicycle in a bright sunlit architectural pavilion"
                fallbackTitle="H2 E-Bike Concept"
                wrapperClass="h-full"
              />
            </div>
            <div class="p-7 sm:p-8 flex flex-col justify-between space-y-6 order-1 md:order-2">
              <div class="space-y-3">
                <p class="text-xs font-medium text-ocean">AshBike Store Concept · H₂</p>
                <h3 class="font-display text-2xl font-bold text-slate-900 tracking-tight">
                  The H₂ E-Bike Concept
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Crazy dream—unbelievable, unimaginable, and unattainable, yet if we make it,
                  undeniably unforgettable. Exploring hydrogen-assisted range alongside integrated
                  eTruck and eBike commuting.
                </p>
              </div>
              <div>
                <a
                  routerLink="/hardware"
                  fragment="h2-concept"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-ocean hover:text-ocean-deep transition-colors"
                >
                  <span>View H₂ Concept & Waitlist</span>
                  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">
                    arrow_forward
                  </mat-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive App Ecosystem Switcher -->
    <section class="bg-white border-b border-slate-200 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div class="space-y-2 max-w-2xl">
            <p class="text-sm font-medium text-emerald-700">02. Connected Software Suite</p>
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Shared bike, fitness, and smart-eyewear apps.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="AshBike Applications"
            class="flex flex-wrap items-center gap-1.5 p-1.5 bg-mineral rounded-xl border border-mineral-line"
          >
            @for (app of apps; track app.id) {
              <button
                type="button"
                role="tab"
                [attr.aria-selected]="selectedAppId() === app.id"
                (click)="selectApp(app.id)"
                [class]="
                  selectedAppId() === app.id
                    ? 'px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-white text-slate-900 shadow-sm whitespace-nowrap shrink-0 transition-colors'
                    : 'px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 whitespace-nowrap shrink-0 transition-colors'
                "
              >
                {{ app.name }}
              </button>
            }
          </div>
        </div>

        @let current = activeApp();
        <div
          class="bg-slate-50 rounded-2xl border border-slate-200 p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div class="lg:col-span-7 space-y-5">
            <div class="flex items-center gap-3 text-xs font-medium text-slate-500">
              <span>{{ current.platform }}</span>
              <span aria-hidden="true">·</span>
              <span>{{ current.stage }}</span>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-seaglass-mist border border-seaglass-line flex items-center justify-center text-seaglass shrink-0"
              >
                <mat-icon>{{ current.icon }}</mat-icon>
              </div>
              <div>
                <h3 class="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  {{ current.name }}
                </h3>
                <p class="text-base font-medium text-emerald-700 mt-1">{{ current.tagline }}</p>
              </div>
            </div>

            <p class="text-base text-slate-600 leading-relaxed">
              {{ current.description }}
            </p>

            <div class="pt-2">
              <a
                routerLink="/tech"
                class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                <span>Open Full App Architecture</span>
                <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">
                  arrow_forward
                </mat-icon>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 bg-pearl rounded-xl border border-mineral-line p-6 space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-mineral-line">
              <span class="text-xs font-medium text-slate-500">{{ current.metricLabel }}</span>
              <span class="font-mono text-sm font-semibold text-ocean tabular-nums">
                {{ current.metricValue }}
              </span>
            </div>
            <ul class="space-y-3">
              @for (item of current.highlights; track item) {
                <li class="flex items-start gap-2.5 text-sm text-slate-700">
                  <mat-icon class="text-emerald-600 !text-[18px] !w-[18px] !h-[18px] mt-0.5 shrink-0">
                    check_circle_outline
                  </mat-icon>
                  <span>{{ item }}</span>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Commute Impact & "Why Bike" Calculator -->
    <section class="bg-slate-50 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-5 space-y-6">
            <div class="space-y-3">
              <p class="text-sm font-medium text-emerald-700">03. Why Bike · Quantified Impact</p>
              <h2 class="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                See what replacing car miles does in one year.
              </h2>
              <p class="text-base text-slate-600 leading-relaxed">
                Slide your weekly riding distance to estimate annual carbon kept out of the air,
                household fuel savings redirected to neighborhood businesses, active energy burned,
                and regenerative phone charge recovered.
              </p>
            </div>

            <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-5">
              <div class="flex items-center justify-between">
                <label for="weekly-miles" class="text-sm font-semibold text-slate-900">
                  Weekly Bike Distance
                </label>
                <span class="font-mono text-xl font-bold text-emerald-700 tabular-nums">
                  {{ weeklyMiles() }} mi / wk
                </span>
              </div>

              <input
                id="weekly-miles"
                type="range"
                min="5"
                max="120"
                step="5"
                [value]="weeklyMiles()"
                (input)="onMilesChange($event)"
                class="w-full accent-emerald-600 cursor-pointer"
              />

              <div class="flex justify-between text-xs text-slate-500 font-mono tabular-nums">
                <span>5 mi (errands)</span>
                <span>40 mi (daily commute)</span>
                <span>120 mi (touring)</span>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200">
                <div>
                  <p class="text-xs text-slate-500">Annual CO₂ Avoided</p>
                  <p class="font-display text-2xl font-bold text-slate-900 tabular-nums mt-0.5">
                    {{ annualCo2Kg() }} kg
                  </p>
                </div>
                <div>
                  <p class="text-xs text-slate-500">Car Fuel & Parking Saved</p>
                  <p class="font-display text-2xl font-bold text-emerald-700 tabular-nums mt-0.5">
                    \${{ annualSavingsUsd() }}
                  </p>
                </div>
                <div>
                  <p class="text-xs text-slate-500">Active Energy Burned</p>
                  <p class="font-display text-2xl font-bold text-seaglass tabular-nums mt-0.5">
                    {{ annualKcal() }} kcal
                  </p>
                </div>
                <div>
                  <p class="text-xs text-slate-500">Regen Brake Phone Charges</p>
                  <p class="font-display text-2xl font-bold text-ocean tabular-nums mt-0.5">
                    {{ regenCharges() }}× full
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            @for (benefit of benefits; track benefit.id) {
              <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
                <div class="flex items-center justify-between">
                  <mat-icon class="text-emerald-600">{{ benefit.icon }}</mat-icon>
                  <span class="text-xs font-mono text-slate-500 tabular-nums">
                    {{ benefit.metric }}
                  </span>
                </div>
                <h3 class="font-display text-lg font-semibold text-slate-900">
                  {{ benefit.title }}
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  {{ benefit.summary }}
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Home {
  protected readonly images = ASHBIKE_IMAGES;
  protected readonly apps = APP_SUITE;
  protected readonly benefits = SUSTAINABILITY_BENEFITS;

  protected readonly selectedAppId = signal<string>(APP_SUITE[0].id);
  protected readonly weeklyMiles = signal<number>(30);

  protected readonly activeApp = computed(() => {
    const id = this.selectedAppId();
    return this.apps.find((a) => a.id === id) ?? this.apps[0];
  });

  protected readonly annualCo2Kg = computed(() => Math.round(this.weeklyMiles() * 52 * 0.404));
  protected readonly annualSavingsUsd = computed(() =>
    Math.round(this.weeklyMiles() * 52 * 0.62).toLocaleString('en-US'),
  );
  protected readonly annualKcal = computed(() =>
    Math.round(this.weeklyMiles() * 52 * 45).toLocaleString('en-US'),
  );
  protected readonly regenCharges = computed(() => Math.round(this.weeklyMiles() * 1.4));

  protected selectApp(id: string): void {
    this.selectedAppId.set(id);
  }

  protected onMilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.weeklyMiles.set(Number(input.value));
  }
}
