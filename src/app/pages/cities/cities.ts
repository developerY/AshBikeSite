import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {
  ASHBIKE_IMAGES,
  COMMERCE_BENEFITS,
  RICKSHAW_POINTS,
} from '../../data/ashbike-data';
import {ResilientImage} from '../../components/resilient-image/resilient-image';

interface TowerSlot {
  slot: number;
  occupied: boolean;
  label: string;
}

@Component({
  selector: 'app-cities',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ResilientImage],
  template: `
    <!-- Cities & Rethinking Biking Hero -->
    <section class="bg-white border-b border-slate-200 py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div class="lg:col-span-6 flex flex-col justify-center space-y-5">
            <p class="text-sm font-medium text-emerald-700">
              Sustainability · Rethinking Biking & Cities
            </p>
            <h1 class="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Human-scale streets where shops, riders, and neighborhoods thrive.
            </h1>
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
              Shifting from car-centric travel to bicycles, e-bikes, cycle rickshaws, and vertical
              bike towers clears congestion, cleans urban air, and brings lively foot traffic right
              to local storefronts.
            </p>
            <p class="text-xs text-slate-500">
              Vertical Bike Towers · Cycle Rickshaws · LA 28×28 · New York Streets
            </p>
          </div>

          <div class="lg:col-span-6">
            <div class="h-full min-h-[280px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <app-resilient-image
                [src]="images.city"
                alt="Happy cyclists riding along a sunny tree-lined street beside outdoor cafes and micro-mobility hub"
                fallbackTitle="Bike-Friendly Urban Corridor"
                wrapperClass="h-full"
                imgClass="lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Vertical Bike Tower ("PEZ Dispenser") -->
    <section class="bg-slate-50 border-b border-slate-200 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-6 space-y-6">
            <div class="space-y-3">
              <p class="text-sm font-medium text-emerald-700">
                01. Vertical Bike Parking · Bike Tower
              </p>
              <h2 class="font-display text-3xl font-bold text-slate-900 tracking-tight">
                Bike parking reimagined—just like a PEZ dispenser.
              </h2>
              <p class="text-base text-slate-600 leading-relaxed">
                Instead of cluttering sidewalks with sprawling metal racks, our automated Bike
                Tower works like a clean vertical elevator for your bicycle. Drop your ride in at
                street level—and retrieve it seconds later at the push of a button, protected from
                theft and rain.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-xl border border-slate-200 p-4">
                <p class="text-xs text-slate-500">Sidewalk Space Saved</p>
                <p class="font-display text-2xl font-bold text-emerald-700 tabular-nums mt-0.5">
                  90% Less
                </p>
                <p class="text-xs text-slate-500 mt-0.5">Minimal ground footprint</p>
              </div>
              <div class="bg-white rounded-xl border border-slate-200 p-4">
                <p class="text-xs text-slate-500">Protection</p>
                <p class="font-display text-2xl font-bold text-slate-900 mt-0.5">
                  Weatherproof
                </p>
                <p class="text-xs text-slate-500 mt-0.5">Theft & rain enclosed</p>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <button
                type="button"
                (click)="parkBike()"
                [disabled]="occupiedCount() >= 8"
                class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-xl transition-colors whitespace-nowrap"
              >
                <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">
                  arrow_upward
                </mat-icon>
                <span>Park Bike in Tower</span>
              </button>
              <button
                type="button"
                (click)="retrieveBike()"
                [disabled]="occupiedCount() === 0"
                class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors whitespace-nowrap"
              >
                <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">
                  arrow_downward
                </mat-icon>
                <span>Retrieve Next Bike</span>
              </button>
            </div>
          </div>

          <div class="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div class="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <div>
                <h3 class="font-display text-lg font-bold text-slate-900">
                  Live Bike Tower Stack
                </h3>
                <p class="text-xs text-slate-500">{{ towerMessage() }}</p>
              </div>
              <span class="font-mono text-sm font-semibold text-emerald-700 tabular-nums">
                {{ occupiedCount() }} / 8 Bays
              </span>
            </div>

            <div class="space-y-2.5">
              @for (bay of towerBays(); track bay.slot) {
                <div
                  [class]="
                    bay.occupied
                      ? 'flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-50/70 border border-emerald-200 transition-colors'
                      : 'flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 transition-colors'
                  "
                >
                  <div class="flex items-center gap-3">
                    <span class="font-mono text-xs text-slate-500 tabular-nums w-12">
                      Bay 0{{ bay.slot }}
                    </span>
                    <mat-icon
                      [class]="
                        bay.occupied
                          ? 'text-emerald-600 !text-[19px] !w-[19px] !h-[19px]'
                          : 'text-slate-300 !text-[19px] !w-[19px] !h-[19px]'
                      "
                    >
                      pedal_bike
                    </mat-icon>
                    <span class="text-sm font-medium text-slate-800">
                      {{ bay.occupied ? bay.label : 'Open Vertical Bay' }}
                    </span>
                  </div>
                  <span
                    [class]="
                      bay.occupied
                        ? 'text-xs font-medium text-emerald-700'
                        : 'text-xs text-slate-400'
                    "
                  >
                    {{ bay.occupied ? 'Secured' : 'Available' }}
                  </span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Local Business & Cycle Rickshaws -->
    <section class="bg-white border-b border-slate-200 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <!-- How Bike Traffic Boosts Local Businesses -->
        <div>
          <div class="max-w-2xl mb-10 space-y-2">
            <p class="text-sm font-medium text-emerald-700">02. Thriving Commercial Districts</p>
            <h2 class="font-display text-3xl font-bold text-slate-900 tracking-tight">
              How bike traffic boosts local businesses.
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (item of commerce; track item.title) {
              <div class="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-2.5">
                <h3 class="font-display text-lg font-semibold text-slate-900">{{ item.title }}</h3>
                <p class="text-sm text-slate-600 leading-relaxed">{{ item.description }}</p>
              </div>
            }
          </div>
        </div>

        <!-- Cycle Rickshaws / Bike Cabs -->
        <div class="pt-10 border-t border-slate-200">
          <div class="max-w-2xl mb-10 space-y-2">
            <p class="text-sm font-medium text-emerald-700">
              03. Micro-Mobility · Cycle Rickshaws
            </p>
            <h2 class="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Replacing rideshares with bike cabs: a community-focused alternative.
            </h2>
            <p class="text-base text-slate-600">
              Electric-assisted pedicabs bring old-fashioned open-air charm together with modern
              short-hop efficiency—connecting riders directly to streets and local entrepreneurs.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (pt of rickshaws; track pt.title) {
              <div class="bg-white rounded-2xl border border-slate-200 p-6 space-y-2.5">
                <h3 class="font-display text-lg font-semibold text-slate-900">{{ pt.title }}</h3>
                <p class="text-sm text-slate-600 leading-relaxed">{{ pt.description }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- City Spotlights: LA 28x28 & New York -->
    <section class="bg-slate-50 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div class="space-y-2">
            <p class="text-sm font-medium text-emerald-700">04. City Spotlights</p>
            <h2 class="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Reimagining major corridors in Los Angeles & New York.
            </h2>
          </div>

          <div class="flex items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 shrink-0">
            <button
              type="button"
              (click)="activeCity.set('la')"
              [class]="
                activeCity() === 'la'
                  ? 'px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white whitespace-nowrap'
                  : 'px-4 py-2 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 whitespace-nowrap'
              "
            >
              Los Angeles (28×28)
            </button>
            <button
              type="button"
              (click)="activeCity.set('ny')"
              [class]="
                activeCity() === 'ny'
                  ? 'px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white whitespace-nowrap'
                  : 'px-4 py-2 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 whitespace-nowrap'
              "
            >
              New York City
            </button>
          </div>
        </div>

        @if (activeCity() === 'la') {
          <div class="bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-3">
              <p class="text-xs font-medium text-slate-500">LA Metro Initiative</p>
              <h3 class="font-display text-2xl font-bold text-slate-900">
                28 Projects by 2028 Games
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                LA Metro's Twenty-Eight by '28 Initiative prioritizes regional transit corridors
                and active micro-mobility connectivity linking neighborhoods directly to major
                sports venues and civic plazas.
              </p>
            </div>
            <div class="space-y-3 border-t md:border-t-0 md:border-l border-slate-200 pt-5 md:pt-0 md:pl-8">
              <p class="text-xs font-medium text-slate-500">PeopleForBikes Collaboration</p>
              <h3 class="font-display text-2xl font-bold text-slate-900">
                Building the Future of Biking in Los Angeles
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Protected bike networks, shared-bike integration, and smartphone-guided safe routes
                unlock year-round sunshine cycling across sprawling LA corridors.
              </p>
            </div>
          </div>
        } @else {
          <div class="bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-3">
              <p class="text-xs font-medium text-slate-500">High-Density Streetscapes</p>
              <h3 class="font-display text-2xl font-bold text-slate-900">
                Reclaiming Sidewalks with Vertical Towers
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                In dense five-borough corridors where every square foot of sidewalk matters,
                automated Bike Towers and cycle rickshaws keep streets moving without parking
                clutter.
              </p>
            </div>
            <div class="space-y-3 border-t md:border-t-0 md:border-l border-slate-200 pt-5 md:pt-0 md:pl-8">
              <p class="text-xs font-medium text-slate-500">Storefront Vitality</p>
              <h3 class="font-display text-2xl font-bold text-slate-900">
                Neighborhood Shops & Café Perks
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Connecting commuters with protected cross-town bike lanes and local café
                incentives shifts everyday short trips away from idling rideshares.
              </p>
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class Cities {
  protected readonly images = ASHBIKE_IMAGES;
  protected readonly commerce = COMMERCE_BENEFITS;
  protected readonly rickshaws = RICKSHAW_POINTS;

  protected readonly activeCity = signal<'la' | 'ny'>('la');
  protected readonly towerMessage = signal('Ready at street level · Push a button to park or retrieve');

  protected readonly towerBays = signal<TowerSlot[]>([
    {slot: 8, occupied: false, label: ''},
    {slot: 7, occupied: false, label: ''},
    {slot: 6, occupied: false, label: ''},
    {slot: 5, occupied: true, label: 'Commuter Gravel · Bay 05'},
    {slot: 4, occupied: true, label: 'H₂ Concept Frame · Bay 04'},
    {slot: 3, occupied: true, label: 'GoSwift Shared Bike · Bay 03'},
    {slot: 2, occupied: true, label: 'City Cruiser · Bay 02'},
    {slot: 1, occupied: true, label: 'Electric Road · Bay 01'},
  ]);

  protected readonly occupiedCount = computed(
    () => this.towerBays().filter((b) => b.occupied).length,
  );

  protected parkBike(): void {
    const bays = this.towerBays();
    const emptyReverseIdx = [...bays].reverse().findIndex((b) => !b.occupied);
    if (emptyReverseIdx === -1) {
      this.towerMessage.set('Tower full — retrieve a bike first');
      return;
    }
    const targetSlot = bays[bays.length - 1 - emptyReverseIdx].slot;
    this.towerBays.update((list) =>
      list.map((b) =>
        b.slot === targetSlot
          ? {...b, occupied: true, label: `Your AshBike · Bay 0${targetSlot}`}
          : b,
      ),
    );
    this.towerMessage.set(`Elevator lifted your bike cleanly into Bay 0${targetSlot}`);
  }

  protected retrieveBike(): void {
    const bays = this.towerBays();
    const topOccupied = bays.find((b) => b.occupied);
    if (!topOccupied) {
      this.towerMessage.set('Tower is currently empty');
      return;
    }
    this.towerBays.update((list) =>
      list.map((b) => (b.slot === topOccupied.slot ? {...b, occupied: false, label: ''} : b)),
    );
    this.towerMessage.set(`Delivered bicycle from Bay 0${topOccupied.slot} to street level`);
  }
}
