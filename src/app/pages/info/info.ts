import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {
  EULA_SECTIONS,
  MEDIUM_ESSAYS,
  PRIVACY_SECTIONS,
} from '../../data/ashbike-data';

@Component({
  selector: 'app-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatIconModule],
  template: `
    <!-- Manifesto & Published Essays -->
    <section class="bg-pearl border-b border-mineral-line py-14 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4 mb-12">
          <p class="text-sm font-medium text-ocean">About · ZoeWave & AshBike</p>
          <h1 class="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08]">
            We are all athletes using our energy to save our planet and ourselves.
          </h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore the research essays, open architecture notes, contact channel, and
            local-first privacy commitments behind AshBike.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (essay of essays; track essay.url) {
            <a
              [href]="essay.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group bg-white hover:bg-ocean-mist/35 rounded-2xl border border-mineral-line hover:border-ocean-line p-6 flex flex-col justify-between space-y-4 transition-colors"
            >
              <div class="space-y-2.5">
                <p class="text-xs font-medium text-seaglass">{{ essay.topic }}</p>
                <h2 class="font-display text-lg font-bold text-slate-900 group-hover:text-ocean transition-colors">
                  {{ essay.title }}
                </h2>
                <p class="text-sm text-slate-600 leading-relaxed">{{ essay.summary }}</p>
              </div>
              <div class="flex items-center gap-1.5 text-xs font-semibold text-ocean">
                <span>Read on Medium</span>
                <mat-icon class="!text-[16px] !w-[16px] !h-[16px] leading-none">
                  open_in_new
                </mat-icon>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Contact Inquiry & Legal Reader -->
    <section id="legal" class="bg-mineral py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <!-- Validated Contact Form -->
        <div class="lg:col-span-5 bg-white rounded-2xl border border-mineral-line p-7 space-y-6">
          <div class="space-y-1.5">
            <p class="text-xs font-medium text-seaglass">Get in Touch</p>
            <h2 class="font-display text-2xl font-bold text-slate-900">Contact AshBike</h2>
            <p class="text-sm text-slate-600">
              Questions on Android/iOS testing, city micro-mobility pilots, or hardware concepts.
            </p>
          </div>

          @if (contactSubmitted()) {
            <div class="p-5 rounded-xl bg-seaglass-mist border border-seaglass-line space-y-2">
              <div class="flex items-center gap-2 text-seaglass-deep font-semibold text-sm">
                <mat-icon>check_circle</mat-icon>
                <span>Message Received</span>
              </div>
              <p class="text-sm text-slate-700">
                Thank you for reaching out to the AshBike team. Your note has been logged for
                follow-up.
              </p>
              <button
                type="button"
                (click)="resetContact()"
                class="text-xs font-semibold text-ocean underline hover:text-ocean-deep pt-1"
              >
                Send another inquiry
              </button>
            </div>
          } @else {
            <form [formGroup]="contactForm" (ngSubmit)="submitContact()" class="space-y-4">
              <div>
                <label for="contact-name" class="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  formControlName="name"
                  placeholder="Alex Rivera"
                  class="w-full px-3.5 py-2.5 text-sm bg-pearl border border-mineral-line rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean focus:bg-white"
                />
                @if (contactForm.controls.name.touched && contactForm.controls.name.invalid) {
                  <p class="text-xs text-rose-600 mt-1">Name is required.</p>
                }
              </div>

              <div>
                <label for="contact-email" class="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  formControlName="email"
                  placeholder="alex@example.com"
                  class="w-full px-3.5 py-2.5 text-sm bg-pearl border border-mineral-line rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean focus:bg-white"
                />
                @if (contactForm.controls.email.touched && contactForm.controls.email.invalid) {
                  <p class="text-xs text-rose-600 mt-1">Please enter a valid email address.</p>
                }
              </div>

              <div>
                <label for="contact-topic" class="block text-xs font-semibold text-slate-700 mb-1.5">
                  Topic
                </label>
                <select
                  id="contact-topic"
                  formControlName="topic"
                  class="w-full px-3.5 py-2.5 text-sm bg-pearl border border-mineral-line rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean focus:bg-white"
                >
                  <option value="apps">AshBike / Swift Bike Shift / GoSwift Apps</option>
                  <option value="hardware">Regenerative Brakes & H₂ Concept</option>
                  <option value="cities">Bike Tower & City Partnerships</option>
                  <option value="privacy">Privacy & Licensing</option>
                </select>
              </div>

              <div>
                <label for="contact-msg" class="block text-xs font-semibold text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-msg"
                  rows="3"
                  formControlName="message"
                  placeholder="Tell us how you'd like to collaborate..."
                  class="w-full px-3.5 py-2.5 text-sm bg-pearl border border-mineral-line rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ocean focus:bg-white"
                ></textarea>
                @if (contactForm.controls.message.touched && contactForm.controls.message.invalid) {
                  <p class="text-xs text-rose-600 mt-1">Please include at least 10 characters.</p>
                }
              </div>

              <button
                type="submit"
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-ocean hover:bg-ocean-deep rounded-xl transition-colors"
              >
                <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">send</mat-icon>
                <span>Send Message</span>
              </button>
            </form>
          }
        </div>

        <!-- Tabbed Privacy Policy & EULA -->
        <div class="lg:col-span-7 bg-white rounded-2xl border border-mineral-line p-7 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-mineral-line">
            <div>
              <h2 class="font-display text-2xl font-bold text-slate-900">
                App Privacy Policy & EULA
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">
                Last Updated April 2026 · Local-First Architecture
              </p>
            </div>

            <div class="flex items-center gap-1 p-1 bg-mineral rounded-xl border border-mineral-line">
              <button
                type="button"
                (click)="legalTab.set('privacy')"
                [class]="
                  legalTab() === 'privacy'
                    ? 'px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white text-ocean-deep shadow-sm whitespace-nowrap'
                    : 'px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 whitespace-nowrap'
                "
              >
                Privacy Policy
              </button>
              <button
                type="button"
                (click)="legalTab.set('eula')"
                [class]="
                  legalTab() === 'eula'
                    ? 'px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white text-ocean-deep shadow-sm whitespace-nowrap'
                    : 'px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 whitespace-nowrap'
                "
              >
                EULA & Safety
              </button>
            </div>
          </div>

          @if (legalTab() === 'privacy') {
            <div class="space-y-6">
              @for (sec of privacy; track sec.heading) {
                <div class="space-y-1.5">
                  <h3 class="font-display text-base font-bold text-slate-900">
                    {{ sec.heading }}
                  </h3>
                  <p class="text-sm text-slate-600 leading-relaxed">{{ sec.body }}</p>
                </div>
              }
            </div>
          } @else {
            <div class="space-y-6">
              @for (sec of eula; track sec.heading) {
                <div class="space-y-1.5">
                  <h3 class="font-display text-base font-bold text-slate-900">
                    {{ sec.heading }}
                  </h3>
                  <p class="text-sm text-slate-600 leading-relaxed">{{ sec.body }}</p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Info {
  private readonly fb = inject(FormBuilder);

  protected readonly essays = MEDIUM_ESSAYS;
  protected readonly privacy = PRIVACY_SECTIONS;
  protected readonly eula = EULA_SECTIONS;

  protected readonly legalTab = signal<'privacy' | 'eula'>('privacy');
  protected readonly contactSubmitted = signal(false);

  protected readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    topic: ['apps'],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected submitContact(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.contactSubmitted.set(true);
  }

  protected resetContact(): void {
    this.contactForm.reset({name: '', email: '', topic: 'apps', message: ''});
    this.contactSubmitted.set(false);
  }
}
