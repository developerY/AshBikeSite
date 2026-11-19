import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {ASHBIKE_IMAGES} from '../../data/ashbike-data';
import {ResilientImage} from '../../components/resilient-image/resilient-image';

type SuspensionMode = 'comfort' | 'sport' | 'off-road';

@Component({
  selector: 'app-hardware',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatIconModule, ResilientImage],
  template: `
    <!-- Regenerative & Anti-Lock Front Braking Hero -->
    <section class="bg-pearl border-b border-mineral-line py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4 mb-12">
          <p class="text-sm font-medium text-seaglass">
            Hardware · Electric Brakes & Intelligent Tuning
          </p>
          <h1 class="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08]">
            Regenerative, anti-lock stopping power that charges your ride.
          </h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
            AshBike reimagines front-wheel braking by replacing high-wear friction pads with
            compact electromagnetic generators—turning wasted stopping heat into steady battery
            power while eliminating sudden front-wheel lockups.
          </p>
        </div>

        <!-- Interactive Regenerative Brake Simulator -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-6 bg-white rounded-2xl border border-mineral-line p-7 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="font-display text-xl font-bold text-slate-900">
                  Interactive Brake Lever Simulator
                </h2>
                <p class="text-xs text-slate-500 mt-0.5">
                  Pull the lever to watch electromagnetic drag & anti-lock protection
                </p>
              </div>
              <span class="font-mono text-2xl font-bold text-ocean tabular-nums">
                {{ leverPull() }}%
              </span>
            </div>

            <div class="space-y-2">
              <label for="brake-pull" class="text-xs font-medium text-slate-700">
                Front Brake Lever Engagement
              </label>
              <input
                id="brake-pull"
                type="range"
                min="0"
                max="100"
                step="5"
                [value]="leverPull()"
                (input)="onPullChange($event)"
                class="w-full accent-ocean cursor-pointer"
              />
              <div class="flex justify-between text-xs text-slate-500 font-mono">
                <span>0% Coasting</span>
                <span>50% Urban Stop</span>
                <span>100% Wet Emergency</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="bg-seaglass-mist rounded-xl border border-seaglass-line p-4">
                <p class="text-xs text-slate-600">Harvested Electrical Power</p>
                <p class="font-display text-2xl font-bold text-seaglass-deep tabular-nums mt-1">
                  {{ harvestedWatts() }} W
                </p>
                <p class="text-xs text-slate-600 mt-1">Regulated 5V USB / Lights</p>
              </div>
              <div class="bg-ocean-mist rounded-xl border border-ocean-line p-4">
                <p class="text-xs text-slate-600">Front Wheel Slip Risk</p>
                <p class="font-display text-2xl font-bold text-ocean tabular-nums mt-1">
                  {{ lockupStatus() }}
                </p>
                <p class="text-xs text-slate-600 mt-1">Load-capped generator drag</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="bg-white rounded-2xl border border-mineral-line p-6 space-y-2.5">
              <mat-icon class="text-seaglass">bolt</mat-icon>
              <h3 class="font-display text-lg font-semibold text-slate-900">Stay Powered</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                A voltage regulator stabilizes generator output into a compact buffer battery or
                capacitor—keeping smartphones, GPS, and lights charged without heavy power banks.
              </p>
            </div>
            <div class="bg-white rounded-2xl border border-mineral-line p-6 space-y-2.5">
              <mat-icon class="text-ocean">shield</mat-icon>
              <h3 class="font-display text-lg font-semibold text-slate-900">
                Built-In Anti-Lock Safety
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Because stopping torque is bounded by generator load rather than harsh mechanical
                clamping, the front tire stays rolling smoothly even on wet asphalt.
              </p>
            </div>
            <div class="bg-white rounded-2xl border border-mineral-line p-6 space-y-2.5">
              <mat-icon class="text-seaglass">recycling</mat-icon>
              <h3 class="font-display text-lg font-semibold text-slate-900">Capture & Reuse</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Instead of dissipating every city stop as wasted brake heat, kinetic energy flows
                straight back into rider electronics.
              </p>
            </div>
            <div class="bg-white rounded-2xl border border-mineral-line p-6 space-y-2.5">
              <mat-icon class="text-slate-700">build</mat-icon>
              <h3 class="font-display text-lg font-semibold text-slate-900">Low Maintenance</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Electromagnetic coils reduce reliance on sacrificial rubber or resin pads—lowering
                wear-and-tear costs over thousands of commuter miles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Electronic Suspension & Predictive Drivetrain -->
    <section class="bg-mineral border-b border-mineral-line py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div class="max-w-2xl space-y-2">
            <p class="text-sm font-medium text-ocean">
              02. BLE Performance Tuning
            </p>
            <h2 class="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Dynamic electronic suspension & predictive gear shifting.
            </h2>
            <p class="text-base text-slate-600">
              Using Bluetooth Low Energy, your smartphone calibrates fork compression and shift
              points automatically from accelerometer, gyroscope, and barometer readings.
            </p>
          </div>

          <div
            class="flex items-center gap-1.5 p-1.5 bg-white rounded-xl border border-mineral-line shrink-0"
          >
            <button
              type="button"
              (click)="suspensionMode.set('comfort')"
              [class]="
                suspensionMode() === 'comfort'
                  ? 'px-4 py-2 text-xs font-semibold rounded-lg bg-ocean text-white whitespace-nowrap'
                  : 'px-4 py-2 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 whitespace-nowrap'
              "
            >
              Comfort
            </button>
            <button
              type="button"
              (click)="suspensionMode.set('sport')"
              [class]="
                suspensionMode() === 'sport'
                  ? 'px-4 py-2 text-xs font-semibold rounded-lg bg-ocean text-white whitespace-nowrap'
                  : 'px-4 py-2 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 whitespace-nowrap'
              "
            >
              Sport
            </button>
            <button
              type="button"
              (click)="suspensionMode.set('off-road')"
              [class]="
                suspensionMode() === 'off-road'
                  ? 'px-4 py-2 text-xs font-semibold rounded-lg bg-ocean text-white whitespace-nowrap'
                  : 'px-4 py-2 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 whitespace-nowrap'
              "
            >
              Off-Road
            </button>
          </div>
        </div>

        @let tuning = activeTuning();
        <div class="bg-white rounded-2xl border border-mineral-line p-7 sm:p-9 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="space-y-2">
            <p class="text-xs text-slate-500">BLE Suspension Profile</p>
            <h3 class="font-display text-2xl font-bold text-slate-900">{{ tuning.label }}</h3>
            <p class="text-sm text-slate-600 leading-relaxed">{{ tuning.summary }}</p>
          </div>
          <div class="space-y-2 border-t md:border-t-0 md:border-l border-mineral-line pt-5 md:pt-0 md:pl-8">
            <p class="text-xs text-slate-500">Damping & Calibration</p>
            <p class="font-mono text-lg font-semibold text-seaglass tabular-nums">
              {{ tuning.damping }}
            </p>
            <p class="text-sm text-slate-600 leading-relaxed">{{ tuning.terrainFocus }}</p>
          </div>
          <div class="space-y-2 border-t md:border-t-0 md:border-l border-mineral-line pt-5 md:pt-0 md:pl-8">
            <p class="text-xs text-slate-500">Predictive Auto-Shifting</p>
            <p class="font-mono text-lg font-semibold text-ocean tabular-nums">
              {{ tuning.shiftCadence }}
            </p>
            <p class="text-sm text-slate-600 leading-relaxed">{{ tuning.shiftLogic }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Store Concept: H2 E-Bike & eMobility -->
    <section id="h2-concept" class="bg-pearl py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div class="lg:col-span-6">
            <div class="h-full min-h-[300px] rounded-2xl overflow-hidden border border-mineral-line bg-mineral">
              <app-resilient-image
                [src]="images.h2Bike"
                alt="Sleek hydrogen-electric concept bicycle inside a bright sunlit architectural pavilion"
                fallbackTitle="H2 E-Bike Concept"
                wrapperClass="h-full"
                imgClass="lg:h-full object-cover"
              />
            </div>
          </div>

          <div class="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <p class="text-sm font-medium text-ocean">
                Store Concept · H₂ E-Bike & eMobility Solution
              </p>
              <h2 class="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Crazy dream—undeniably unforgettable.
              </h2>
              <p class="text-base text-slate-600 leading-relaxed">
                Unbelievable, unimaginable, and unattainable—but if we make it, it will be
                undeniably unforgettable. The AshBike H₂ E-Bike explores ultra-clean hydrogen-cell
                assistance paired with our broader eMobility vision connecting eTrucks, eBikes, and
                smartphones to fix the daily commute.
              </p>
            </div>

            <!-- Validated Concept Interest Form -->
            <div class="bg-white rounded-2xl border border-mineral-line p-6">
              @if (waitlistSubmitted()) {
                <div class="p-4 rounded-xl bg-seaglass-mist border border-seaglass-line space-y-2">
                  <div class="flex items-center gap-2 text-seaglass-deep font-semibold text-sm">
                    <mat-icon>check_circle</mat-icon>
                    <span>Concept Update Registered</span>
                  </div>
                  <p class="text-sm text-slate-700">
                    Thanks for following the H₂ E-Bike & eMobility build! We will share prototype
                    milestones as hardware testing progresses.
                  </p>
                  <button
                    type="button"
                    (click)="resetWaitlist()"
                    class="mt-1 text-xs font-semibold text-ocean underline hover:text-ocean-deep"
                  >
                    Register another email
                  </button>
                </div>
              } @else {
                <form [formGroup]="waitlistForm" (ngSubmit)="submitWaitlist()" class="space-y-3">
                  <label for="h2-email" class="block text-sm font-semibold text-slate-900">
                    Follow H₂ E-Bike & Hardware Prototypes
                  </label>
                  <div class="flex flex-col sm:flex-row gap-3">
                    <input
                      id="h2-email"
                      type="email"
                      formControlName="email"
                      placeholder="rider@example.com"
                      class="flex-1 px-4 py-2.5 text-sm bg-pearl border border-mineral-line rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:bg-white"
                    />
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-ocean hover:bg-ocean-deep rounded-xl transition-colors whitespace-nowrap shrink-0"
                    >
                      <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">
                        notifications_none
                      </mat-icon>
                      <span>Request Updates</span>
                    </button>
                  </div>
                  @if (waitlistForm.controls.email.touched && waitlistForm.controls.email.invalid) {
                    <p class="text-xs text-rose-600">
                      Please enter a valid email address so we can send concept updates.
                    </p>
                  }
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Hardware {
  private readonly fb = inject(FormBuilder);

  protected readonly images = ASHBIKE_IMAGES;
  protected readonly leverPull = signal<number>(45);
  protected readonly suspensionMode = signal<SuspensionMode>('comfort');
  protected readonly waitlistSubmitted = signal(false);

  protected readonly waitlistForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  protected readonly harvestedWatts = computed(() => Math.round(this.leverPull() * 0.42));

  protected readonly lockupStatus = computed(() => {
    const pull = this.leverPull();
    if (pull === 0) {
      return 'Free Rolling';
    }
    if (pull <= 70) {
      return '0% Lockup';
    }
    return 'Load-Capped Safe';
  });

  protected readonly activeTuning = computed(() => {
    const mode = this.suspensionMode();
    if (mode === 'sport') {
      return {
        label: 'Sport Commute',
        summary: 'Firm fork compression for crisp cornering and efficient standing sprints.',
        damping: '78% Stiffness · 12 ms BLE loop',
        terrainFocus: 'Optimized for fast paved boulevards and responsive climbs.',
        shiftCadence: '85–95 RPM Target',
        shiftLogic: 'Anticipates gentle inclines via barometer to hold high cruising momentum.',
      };
    }
    if (mode === 'off-road') {
      return {
        label: 'Gravel & Trail',
        summary: 'Active terrain absorption tuned dynamically from gyroscope and accelerometer spikes.',
        damping: '38% Stiffness · High Rebound',
        terrainFocus: 'Soaks up washboard gravel, tree roots, and uneven park paths.',
        shiftCadence: '72–82 RPM Target',
        shiftLogic: 'Pre-drops ratios smoothly before steep trail pitches to preserve traction.',
      };
    }
    return {
      label: 'Daily Comfort',
      summary: 'Balanced urban plushness engineered to glide smoothly over expansion joints and cobbles.',
      damping: '52% Stiffness · Adaptive',
      terrainFocus: 'Ideal default for mixed city bike lanes and relaxed neighborhood rides.',
      shiftCadence: '75–85 RPM Target',
      shiftLogic: 'Automatically downshifts at red lights for effortless starts.',
    };
  });

  protected onPullChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.leverPull.set(Number(input.value));
  }

  protected submitWaitlist(): void {
    if (this.waitlistForm.invalid) {
      this.waitlistForm.markAllAsTouched();
      return;
    }
    this.waitlistSubmitted.set(true);
  }

  protected resetWaitlist(): void {
    this.waitlistForm.reset();
    this.waitlistSubmitted.set(false);
  }
}
