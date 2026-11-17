import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {
  APP_SUITE,
  ASHBIKE_IMAGES,
  SMARTPHONE_SENSORS,
  type SensorNode,
} from '../../data/ashbike-data';
import {ResilientImage} from '../../components/resilient-image/resilient-image';

type TerrainOption = 'flat' | 'rolling' | 'climb';
type SurfaceOption = 'paved' | 'gravel' | 'trail';
type RideModeOption = 'commute' | 'ar-quest' | 'cafe-perks';

@Component({
  selector: 'app-tech',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ResilientImage],
  template: `
    <!-- Page Header -->
    <section class="bg-white border-b border-slate-200 py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div class="lg:col-span-6 flex flex-col justify-center space-y-5">
            <p class="text-sm font-medium text-emerald-700">
              Tech · Smartphone / Bicycle Fusion
            </p>
            <h1 class="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              From pocket to pedal: smartphones as bicycle brains.
            </h1>
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
              Modern smartphones already carry eight precision sensors, high-resolution cameras,
              and machine learning processors. AshBike turns that everyday pocket device into a
              complete safety, navigation, suspension, and gamified cycling hub.
            </p>
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                (click)="filterCategory('All')"
                [class]="
                  sensorFilter() === 'All'
                    ? 'px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white whitespace-nowrap shrink-0'
                    : 'px-4 py-2 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap shrink-0'
                "
              >
                All 8 Sensors
              </button>
              <button
                type="button"
                (click)="filterCategory('Safety')"
                [class]="
                  sensorFilter() === 'Safety'
                    ? 'px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-600 text-white whitespace-nowrap shrink-0'
                    : 'px-4 py-2 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap shrink-0'
                "
              >
                Safety & Vision
              </button>
              <button
                type="button"
                (click)="filterCategory('Performance')"
                [class]="
                  sensorFilter() === 'Performance'
                    ? 'px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-600 text-white whitespace-nowrap shrink-0'
                    : 'px-4 py-2 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap shrink-0'
                "
              >
                Tuning & Shifting
              </button>
              <button
                type="button"
                (click)="filterCategory('Navigation')"
                [class]="
                  sensorFilter() === 'Navigation'
                    ? 'px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-600 text-white whitespace-nowrap shrink-0'
                    : 'px-4 py-2 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap shrink-0'
                "
              >
                Navigation
              </button>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="h-full min-h-[280px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <app-resilient-image
                [src]="images.cockpit"
                alt="Minimalist handlebar smartphone mount displaying light-mode AshBike route map"
                fallbackTitle="Bicycle Brain Handlebar Cockpit"
                wrapperClass="h-full"
                imgClass="lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive 8-Sensor Suite Explorer -->
    <section class="bg-slate-50 border-b border-slate-200 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            @for (sensor of filteredSensors(); track sensor.id) {
              <button
                type="button"
                (click)="selectSensor(sensor)"
                [class]="
                  activeSensor().id === sensor.id
                    ? 'text-left p-5 rounded-2xl bg-white border-2 border-emerald-600 transition-colors space-y-2'
                    : 'text-left p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors space-y-2'
                "
              >
                <div class="flex items-center justify-between">
                  <mat-icon
                    [class]="
                      activeSensor().id === sensor.id ? 'text-emerald-600' : 'text-slate-600'
                    "
                  >
                    {{ sensor.icon }}
                  </mat-icon>
                  <span class="text-xs font-medium text-slate-500">
                    {{ sensor.safetyOrPerformance }}
                  </span>
                </div>
                <h3 class="font-display text-lg font-semibold text-slate-900">
                  {{ sensor.name }}
                </h3>
                <p class="text-xs text-slate-600 leading-relaxed">
                  {{ sensor.capability }}
                </p>
              </button>
            }
          </div>

          <div class="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-7 space-y-5 sticky top-24">
            <div class="flex items-center justify-between pb-4 border-b border-slate-200">
              <span class="text-xs font-medium text-emerald-700">
                Active Sensor Architecture
              </span>
              <span class="text-xs text-slate-500">
                {{ activeSensor().safetyOrPerformance }} Subsystem
              </span>
            </div>

            <div class="flex items-center gap-3.5">
              <div
                class="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0"
              >
                <mat-icon>{{ activeSensor().icon }}</mat-icon>
              </div>
              <div>
                <h3 class="font-display text-2xl font-bold text-slate-900">
                  {{ activeSensor().name }}
                </h3>
                <p class="text-sm text-slate-500">{{ activeSensor().role }}</p>
              </div>
            </div>

            <p class="text-sm text-slate-700 leading-relaxed">
              {{ activeSensor().detail }}
            </p>

            <div class="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
              <p class="font-semibold text-slate-900">Core Safety & Privacy Protections</p>
              <p>
                Crash detection alerts emergency contacts automatically while keeping continuous
                sensor logs exclusively on your smartphone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Full App Suite Directory -->
    <section class="bg-white border-b border-slate-200 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 space-y-2">
          <p class="text-sm font-medium text-emerald-700">02. App Ecosystem</p>
          <h2 class="font-display text-3xl font-bold text-slate-900 tracking-tight">
            From Health Connect to Smart Glass HUD & AR Play.
          </h2>
          <p class="text-base text-slate-600">
            Every AshBike application builds toward one connected rhythm: effortless shared bikes,
            privacy-first fitness logs, heads-up safety, and joyful outdoor discovery.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (app of apps; track app.id) {
            <article class="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-5">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <mat-icon class="text-emerald-600">{{ app.icon }}</mat-icon>
                  <span class="text-xs font-mono text-slate-500">{{ app.stage }}</span>
                </div>
                <p class="text-xs font-medium text-slate-500">{{ app.platform }}</p>
                <h3 class="font-display text-xl font-bold text-slate-900">{{ app.name }}</h3>
                <p class="text-sm text-slate-600 leading-relaxed">{{ app.description }}</p>
              </div>
              <ul class="space-y-2 pt-3 border-t border-slate-200">
                @for (pt of app.highlights; track pt) {
                  <li class="text-xs text-slate-700 flex items-start gap-2">
                    <mat-icon class="text-emerald-600 !text-[15px] !w-[15px] !h-[15px] mt-0.5 shrink-0">
                      check
                    </mat-icon>
                    <span>{{ pt }}</span>
                  </li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- Interactive Route Planning & AR Gamification Configurator -->
    <section id="route-planner" class="bg-slate-50 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 space-y-2">
          <p class="text-sm font-medium text-emerald-700">
            03. Smart Routing & AR Gamification
          </p>
          <h2 class="font-display text-3xl font-bold text-slate-900 tracking-tight">
            Preview preference-based routing and AR quests.
          </h2>
          <p class="text-base text-slate-600">
            Select your terrain, road surface, and ride style to preview how AshBike pairs safe
            navigation, live weather/traffic avoidance, and local café perks.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-6">
            <div class="space-y-2.5">
              <p class="text-xs font-semibold text-slate-700">Terrain Preference</p>
              <div class="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  (click)="terrain.set('flat')"
                  [class]="
                    terrain() === 'flat'
                      ? 'py-2.5 px-3 text-xs font-semibold rounded-xl bg-emerald-600 text-white whitespace-nowrap'
                      : 'py-2.5 px-3 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap'
                  "
                >
                  Flat Cruise
                </button>
                <button
                  type="button"
                  (click)="terrain.set('rolling')"
                  [class]="
                    terrain() === 'rolling'
                      ? 'py-2.5 px-3 text-xs font-semibold rounded-xl bg-emerald-600 text-white whitespace-nowrap'
                      : 'py-2.5 px-3 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap'
                  "
                >
                  Rolling Hills
                </button>
                <button
                  type="button"
                  (click)="terrain.set('climb')"
                  [class]="
                    terrain() === 'climb'
                      ? 'py-2.5 px-3 text-xs font-semibold rounded-xl bg-emerald-600 text-white whitespace-nowrap'
                      : 'py-2.5 px-3 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap'
                  "
                >
                  Hill Climb
                </button>
              </div>
            </div>

            <div class="space-y-2.5">
              <p class="text-xs font-semibold text-slate-700">Surface Filter</p>
              <div class="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  (click)="surface.set('paved')"
                  [class]="
                    surface() === 'paved'
                      ? 'py-2.5 px-3 text-xs font-semibold rounded-xl bg-slate-900 text-white whitespace-nowrap'
                      : 'py-2.5 px-3 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap'
                  "
                >
                  Paved Lanes
                </button>
                <button
                  type="button"
                  (click)="surface.set('gravel')"
                  [class]="
                    surface() === 'gravel'
                      ? 'py-2.5 px-3 text-xs font-semibold rounded-xl bg-slate-900 text-white whitespace-nowrap'
                      : 'py-2.5 px-3 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap'
                  "
                >
                  Gravel Paths
                </button>
                <button
                  type="button"
                  (click)="surface.set('trail')"
                  [class]="
                    surface() === 'trail'
                      ? 'py-2.5 px-3 text-xs font-semibold rounded-xl bg-slate-900 text-white whitespace-nowrap'
                      : 'py-2.5 px-3 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap'
                  "
                >
                  Park Trails
                </button>
              </div>
            </div>

            <div class="space-y-2.5">
              <p class="text-xs font-semibold text-slate-700">Ride Experience Mode</p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  (click)="rideMode.set('commute')"
                  [class]="
                    rideMode() === 'commute'
                      ? 'py-2.5 px-3 text-xs font-semibold rounded-xl bg-emerald-600 text-white whitespace-nowrap'
                      : 'py-2.5 px-3 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap'
                  "
                >
                  Safe Commute
                </button>
                <button
                  type="button"
                  (click)="rideMode.set('ar-quest')"
                  [class]="
                    rideMode() === 'ar-quest'
                      ? 'py-2.5 px-3 text-xs font-semibold rounded-xl bg-emerald-600 text-white whitespace-nowrap'
                      : 'py-2.5 px-3 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap'
                  "
                >
                  AR Quest
                </button>
                <button
                  type="button"
                  (click)="rideMode.set('cafe-perks')"
                  [class]="
                    rideMode() === 'cafe-perks'
                      ? 'py-2.5 px-3 text-xs font-semibold rounded-xl bg-emerald-600 text-white whitespace-nowrap'
                      : 'py-2.5 px-3 text-xs font-medium rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 whitespace-nowrap'
                  "
                >
                  Café Perks
                </button>
              </div>
            </div>
          </div>

          @let plan = generatedRoute();
          <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-7 space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <p class="text-xs text-slate-500">Generated Route Profile · Local-Only GPS</p>
                <h3 class="font-display text-2xl font-bold text-slate-900 mt-0.5">
                  {{ plan.title }}
                </h3>
              </div>
              <span class="font-mono text-sm font-semibold text-emerald-700 tabular-nums">
                {{ plan.distance }} · {{ plan.elevation }}
              </span>
            </div>

            <p class="text-sm text-slate-600 leading-relaxed">{{ plan.summary }}</p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p class="text-xs text-slate-500">Wind & Lighting</p>
                <p class="text-sm font-semibold text-slate-900 mt-1">{{ plan.conditions }}</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p class="text-xs text-slate-500">Traffic Avoidance</p>
                <p class="text-sm font-semibold text-slate-900 mt-1">{{ plan.trafficNote }}</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p class="text-xs text-slate-500">Gamification / Perk</p>
                <p class="text-sm font-semibold text-emerald-700 mt-1">{{ plan.perk }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Tech {
  protected readonly images = ASHBIKE_IMAGES;
  protected readonly apps = APP_SUITE;
  protected readonly sensors = SMARTPHONE_SENSORS;

  protected readonly sensorFilter = signal<'All' | 'Safety' | 'Performance' | 'Navigation'>('All');
  protected readonly activeSensor = signal<SensorNode>(SMARTPHONE_SENSORS[0]);

  protected readonly terrain = signal<TerrainOption>('flat');
  protected readonly surface = signal<SurfaceOption>('paved');
  protected readonly rideMode = signal<RideModeOption>('commute');

  protected readonly filteredSensors = computed(() => {
    const f = this.sensorFilter();
    if (f === 'All') {
      return this.sensors;
    }
    return this.sensors.filter((s) => s.safetyOrPerformance === f);
  });

  protected readonly generatedRoute = computed(() => {
    const t = this.terrain();
    const s = this.surface();
    const m = this.rideMode();

    const terrainLabel =
      t === 'flat' ? 'Waterfront & Protected Corridor' : t === 'rolling' ? 'Neighborhood Ridge Loop' : 'Summit Conditioning Climb';
    const surfaceLabel =
      s === 'paved' ? 'smooth protected asphalt' : s === 'gravel' ? 'packed limestone & gravel path' : 'tree-lined multi-use park trail';

    const distance = t === 'flat' ? '8.4 km' : t === 'rolling' ? '14.2 km' : '19.6 km';
    const elevation = t === 'flat' ? '+35 m' : t === 'rolling' ? '+185 m' : '+460 m';

    let perk = 'Turn cues routed cleanly to Smart Glass HUD';
    if (m === 'ar-quest') {
      perk = '3 AR checkpoints & 1 team gym along corridor (+240 XP)';
    } else if (m === 'cafe-perks') {
      perk = 'Partner café checkpoint: 15% espresso perk unlocked on arrival';
    }

    return {
      title: `${terrainLabel}`,
      distance,
      elevation,
      summary: `Prioritizing ${surfaceLabel} with dynamic incident avoidance and barometer-assisted shift cues. All telemetry syncs optionally to Google Health Connect or Apple Health.`,
      conditions: '7 km/h tailwind · Daylight HUD clear',
      trafficNote: 'Low-stress bike boulevards selected',
      perk,
    };
  });

  protected filterCategory(cat: 'All' | 'Safety' | 'Performance' | 'Navigation'): void {
    this.sensorFilter.set(cat);
    const list = this.filteredSensors();
    if (list.length > 0 && !list.some((item) => item.id === this.activeSensor().id)) {
      this.activeSensor.set(list[0]);
    }
  }

  protected selectSensor(sensor: SensorNode): void {
    this.activeSensor.set(sensor);
  }
}
