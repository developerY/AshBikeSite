# AshBike Design Language & Replication Guide

A complete visual, typographic, color, layout, and component specification for replicating the **AshBike** web experience.

---

## 1. Aesthetic Direction & Core Principles

AshBike's design language embodies **Coastal Civic Mobility**: sunlit daylight clarity, architectural restraint, and calm ocean-and-mineral poise. It avoids dark-mode tech tropes in favor of an open, breathable light-mode palette built strictly around **Deep Ocean Blue, Slate, Mineral Grey, Sea-Glass Green, and Pearl**.

### Guiding Principles
1. **Luminous Daylight Light Mode**: Warm Pearl (`#FAF9F6`) and cool Mineral Grey (`#EEF2F4`) alternate cleanly across sections, punctuated by crisp pure white (`#FFFFFF`) interactive cards (`color-scheme: light` enforced globally).
2. **Deep Ocean Blue as Primary Anchor**: Deep Ocean Blue (`#0B4F78` / `#083A59`) drives all primary calls to action, active navigation underlines, sliders, selected borders, and focus rings.
3. **Sea-Glass Green as Vitality & Sustainability Counterpart**: Sea-Glass Green (`#1D7A6E` / `#155E55`) highlights eco-metrics, regenerative energy, secured Bike Tower bays, ride experience modes, checkmarks, and confirmation banners.
4. **Slate & Mineral Structural Hierarchy**: Slate (`#0F172A`–`#64748B`) governs typography with AAA/AA contrast, while Mineral Grey (`#EEF2F4`) and Mineral Line (`#D4DEE4`) define flat `1px` borders, segmented tracks, and recessed bays without heavy drop shadows.
5. **Zero-Pill Metadata Discipline**: Category labels, platforms, and dates are rendered as clean typographic text separated by middle dots (`·`)—never wrapped in decorative pill badges or pulsing status dots.
6. **Editorial Precision with Live Interactivity**: Every page pairs spacious editorial storytelling with hands-on light-mode tools (commute impact calculator, sensor explorer, route configurator, brake simulator, and live vertical Bike Tower stack).

---

## 2. Color System

### 2.1 Five-Color Palette Architecture

| Palette Family | Token / Class | Hex | Usage |
|---|---|---|---|
| **Pearl** | `bg-pearl` (`--color-pearl`) | `#FAF9F6` | Primary page canvas, sticky header (`bg-pearl/95`), alternating hero/content sections, form input resting fill, open Bike Tower bays |
| **Pearl (Crisp White)** | `bg-white` | `#FFFFFF` | Elevated content cards, interactive control panels, active segmented tab buttons, secondary buttons |
| **Mineral Grey** | `bg-mineral` (`--color-mineral`) | `#EEF2F4` | Alternating section bands, footer background, segmented tab tracks, inactive filter chips, media loading containers |
| **Mineral Soft** | `bg-mineral-soft` (`--color-mineral-soft`) | `#F4F6F8` | Subtle soft-mineral auxiliary surface |
| **Mineral Line** | `border-mineral-line` (`--color-mineral-line`) | `#D4DEE4` | Section hairlines, header/footer dividers, card borders, input borders, tab track borders |
| **Slate** | `text-slate-900` / `bg-slate-900` | `#0F172A` | Primary headings (`h1`–`h4`), wordmark, high-emphasis values, dark secondary action buttons |
| **Slate** | `text-slate-800` | `#1E293B` | Sub-labels, metric titles, secondary button labels |
| **Slate** | `text-slate-700` | `#334155` | Form labels, list items, inactive mobile links, neutral icons |
| **Slate** | `text-slate-600` | `#475569` | Body paragraphs, inactive navigation links, secondary icons |
| **Slate** | `text-slate-500` | `#64748B` | Captions, metadata lines, helper text, footer fine print |
| **Slate** | `text-slate-400` / `text-slate-300` | `#94A3B8` / `#CBD5E1` | Placeholders, available/empty status labels, disabled button fills (`bg-slate-300`) |
| **Deep Ocean Blue** | `bg-ocean` / `text-ocean` (`--color-ocean`) | `#0B4F78` | Primary CTA fills, active nav underline, range slider `accent-ocean`, active card borders (`border-2`), focus rings, key telemetry figures, outbound links |
| **Deep Ocean Blue (Deep)** | `bg-ocean-deep` / `text-ocean-deep` (`--color-ocean-deep`) | `#083A59` | Primary CTA hover fill, active tab text, active nav text, dark button hover, link hover |
| **Deep Ocean Mist** | `bg-ocean-mist` (`--color-ocean-mist`) | `#E7F1F7` | Active mobile nav fill, text selection background, icon containers, weather/anti-lock stat callouts |
| **Deep Ocean Line** | `border-ocean-line` (`--color-ocean-line`) | `#B8D2E3` | Hairline borders for `bg-ocean-mist` tiles and hoverable essay/sensor cards |
| **Sea-Glass Green** | `bg-seaglass` / `text-seaglass` (`--color-seaglass`) | `#1D7A6E` | Sustainability & micro-mobility kickers, check icons, Tuning & Ride Mode active buttons, active energy metrics, occupied Bike Tower icons |
| **Sea-Glass Deep** | `text-seaglass-deep` (`--color-seaglass-deep`) | `#155E55` | High-contrast Sea-Glass text on mist/pearl cards, hover state for Sea-Glass links, success alert headings |
| **Sea-Glass Mist** | `bg-seaglass-mist` (`--color-seaglass-mist`) | `#E6F4F1` | Soft sea-glass tint for secured Bike Tower bays, harvested power stat card, App Switcher icon box, gamification/perk card, form success alerts |
| **Sea-Glass Line** | `border-seaglass-line` (`--color-seaglass-line`) | `#B2DAD2` | Hairline borders paired with `bg-seaglass-mist` |

### 2.2 Semantic Validation Color

| Token / Class | Hex | Usage |
|---|---|---|
| `text-rose-600` | `#E11D48` | Inline form validation error messages only |

### 2.3 Color Balance Rules
- **~50% Pearl & Crisp White (`#FAF9F6` / `#FFFFFF`)**: Sunlit primary sections and card surfaces.
- **~25% Mineral Grey (`#EEF2F4` / `#D4DEE4`)**: Alternating section bands, footer, tracks, and hairline borders.
- **~10% Slate (`#0F172A`–`#64748B`)**: Crisp editorial typography and neutral secondary emphasis.
- **~9% Deep Ocean Blue (`#0B4F78` / `#083A59` / `#E7F1F7`)**: Primary actions, navigation authority, sliders, and active focus states.
- **~6% Sea-Glass Green (`#1D7A6E` / `#155E55` / `#E6F4F1`)**: Eco-impact highlights, energy harvest readouts, secured states, and positive confirmations.

---

## 3. Typography

### 3.1 Font Families & Loading

- **Display (`--font-display`)**: **Outfit** (weights `400, 500, 600, 700`) — geometric, architectural headlines and large stat figures.
- **Body (`--font-sans`)**: **Plus Jakarta Sans** (weights `400, 500, 600, 700`) — crisp, highly legible UI copy and prose.
- **Monospace (`--font-mono`)**: **JetBrains Mono** (weights `400, 500`) — sensor telemetry, elevation/distance readouts, wattage, bay counters, and slider bounds.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### 3.2 Type Scale & Stylistic Rules

| Role | Font | Tailwind Classes | Notes |
|---|---|---|---|
| **Home Hero H1** | Outfit | `font-display font-bold text-slate-900 tracking-tight leading-[1.06] text-4xl sm:text-5xl lg:text-[3.5rem]` | `text-wrap: balance` applied via base CSS |
| **Subpage Hero H1** | Outfit | `font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08]` | Used on Tech, Hardware, Cities, Info |
| **Section H2** | Outfit | `font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight` | `text-wrap: balance` applied |
| **Feature Card H3** | Outfit | `font-display text-2xl font-bold text-slate-900 tracking-tight` | Bento pillars, spotlights, active detail panels |
| **Compact Card H3** | Outfit | `font-display text-lg font-semibold text-slate-900` | Grid cards (benefits, sensors, commerce, rickshaws) |
| **Section Kicker** | Plus Jakarta Sans | `text-sm font-medium text-ocean` or `text-seaglass` | Numbered editorial prefix: `01. Core Architecture` |
| **Card Kicker** | Plus Jakarta Sans | `text-xs font-medium text-ocean` or `text-seaglass` | Plain text, middle-dot separated (`Urban Parking · Micro-Mobility`) |
| **Hero Lead Copy** | Plus Jakarta Sans | `text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl` | Generous line height |
| **Standard Body** | Plus Jakarta Sans | `text-sm text-slate-600 leading-relaxed` | Card descriptions & legal prose |
| **Metadata / Footnote** | Plus Jakarta Sans | `text-xs text-slate-500` | Platform lists, helper hints, timestamps |
| **Display KPI Figure** | Outfit | `font-display text-2xl sm:text-3xl font-bold tabular-nums` | Always pair with `.tabular-nums` (`font-variant-numeric: tabular-nums`) |
| **Mono Telemetry / Unit** | JetBrains Mono | `font-mono text-sm font-semibold tabular-nums` (or `text-xl` / `text-2xl` for live sliders) | Prevents layout jitter when slider values change |

---

## 4. Layout, Grid & Spacing Rhythm

### 4.1 Page Container
Every section, header, and footer aligns strictly to a centered `1280px` container:
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">...</div>
```

### 4.2 Alternating Section Cadence
Sections alternate between `bg-pearl` and `bg-mineral`, separated by `border-b border-mineral-line`.

| Section Type | Vertical Padding |
|---|---|
| Home Hero | `py-12 lg:py-20` |
| Subpage Hero | `py-14 lg:py-20` |
| Standard Content Band | `py-16 lg:py-20` |
| Major Interactive Showcase | `py-16 lg:py-24` |
| Footer | `py-14` |

### 4.3 Core Responsive Grid Patterns
- **Split Hero (12-col)**: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch` — left `lg:col-span-6` text column matched in height with right `lg:col-span-6` media frame (`min-h-[300px] lg:min-h-[440px]`).
- **4-Column Impact Strip**: `mt-12 pt-8 border-t border-mineral-line grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8`.
- **Asymmetric Bento Grid**: `grid grid-cols-1 lg:grid-cols-3 gap-6` combining two `lg:col-span-2` split image+copy cards (`bg-pearl`) with two `lg:col-span-1` editorial cards (`bg-white`).
- **Interactive Master-Detail / Calculator (5/7 split)**: `grid grid-cols-1 lg:grid-cols-12 gap-8` (or `gap-10`).
- **4-Column Editorial Cards**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`.
- **3-Column Directory Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.

---

## 5. Elevation, Borders & Corner Radii

| Element | Border | Radius | Shadow |
|---|---|---|---|
| Sticky Navbar | `border-b border-mineral-line` | none | none (`bg-pearl/95 backdrop-blur-md`) |
| Major Cards & Media Frames | `border border-mineral-line` | `rounded-2xl` (`16px`) | none |
| Selected Interactive Card | `border-2 border-ocean` | `rounded-2xl` (`16px`) | none |
| Nested Stat / Info Callouts | `border-mineral-line` / `border-ocean-line` / `border-seaglass-line` | `rounded-xl` (`12px`) | none |
| Buttons, Inputs & Filter Chips | None (solid) or `border-mineral-line` | `rounded-xl` (`12px`) | none |
| Icon Containers (`44px`–`48px`) | `border-ocean-line` or `border-seaglass-line` | `rounded-xl` (`12px`) | none |
| Segmented Tab Track | `border border-mineral-line` (`p-1.5` / `p-1`) | `rounded-xl` (`12px`) | none |
| Active Segmented Tab Button | none | `rounded-lg` (`8px`) | `shadow-sm` (only shadow in system) |

---

## 6. Component Blueprints

### 6.1 Three-Zone Sticky Navbar
- **Height**: `h-16` (`64px`), `sticky top-0 z-40 bg-pearl/95 backdrop-blur-md border-b border-mineral-line`.
- **Zone 1 (Left)**: Plain typographic wordmark (`font-display text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0`).
- **Zone 2 (Center)**: 5 single-line links (`gap-7 text-sm font-medium text-slate-600 hover:text-ocean`). Active state: `text-ocean-deep underline decoration-ocean decoration-2 underline-offset-8`.
- **Zone 3 (Right)**: Single primary Deep Ocean CTA (`bg-ocean hover:bg-ocean-deep`) on `sm+` screens, plus a `44×44px` (`w-11 h-11`) mobile menu button on `< md`.
- **Mobile Drawer**: `border-t border-mineral-line bg-pearl px-4 py-4 space-y-2`; active mobile link uses `bg-ocean-mist text-ocean-deep font-semibold`.

### 6.2 Buttons & Links

```html
<!-- Primary CTA (Deep Ocean Blue) -->
<button class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-ocean hover:bg-ocean-deep disabled:bg-slate-300 disabled:cursor-not-allowed rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2">
  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">explore</mat-icon>
  <span>Primary Action</span>
</button>

<!-- Secondary Neutral Button -->
<button class="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-mineral border border-mineral-line rounded-xl transition-colors whitespace-nowrap shrink-0">
  <span>Secondary Action</span>
  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">arrow_forward</mat-icon>
</button>

<!-- Dark Slate Emphasis Action -->
<a class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-ocean-deep rounded-xl transition-colors whitespace-nowrap shrink-0">
  <span>Open Architecture</span>
  <mat-icon class="!text-[18px] !w-[18px] !h-[18px] leading-none">arrow_forward</mat-icon>
</a>

<!-- Inline Editorial Directional Links -->
<a class="inline-flex items-center gap-2 text-sm font-semibold text-ocean hover:text-ocean-deep transition-colors">...</a>
<a class="inline-flex items-center gap-2 text-sm font-semibold text-seaglass hover:text-seaglass-deep transition-colors">...</a>
```

### 6.3 Cards & Tinted Callouts
- **Elevated Card**: `bg-white rounded-2xl border border-mineral-line p-6` (or `p-7 sm:p-8`).
- **Warm Pearl Feature Card** (inside `bg-mineral` bands): `bg-pearl rounded-2xl border border-mineral-line`.
- **Tinted Coastal Sub-Cards**:
  - **Deep Ocean Mist**: `p-4 rounded-xl bg-ocean-mist border border-ocean-line` (accent text: `text-ocean`).
  - **Mineral Neutral**: `p-4 rounded-xl bg-mineral border border-mineral-line` (accent text: `text-slate-900`).
  - **Sea-Glass Mist**: `p-4 rounded-xl bg-seaglass-mist border border-seaglass-line` (accent text: `text-seaglass-deep`).

### 6.4 Segmented Tabs & Multi-Accent Filter Chips
- **Mineral Track** (on `bg-pearl` / `bg-white`): `p-1.5 bg-mineral rounded-xl border border-mineral-line`, active tab `bg-white text-ocean-deep shadow-sm rounded-lg`.
- **White Track** (on `bg-mineral` sections): `p-1.5 bg-white rounded-xl border border-mineral-line`, active tab `bg-ocean text-white rounded-lg`.
- **Category Filter Chips**: Inactive chips use `bg-mineral text-slate-700 hover:bg-mineral-line/60 rounded-xl`. Active chips map semantically:
  - All / Surface: `bg-slate-900 text-white`
  - Safety / Terrain: `bg-ocean text-white`
  - Tuning / Ride Mode: `bg-seaglass text-white`
  - Navigation: `bg-ocean-deep text-white`

### 6.5 Sliders & Form Controls
- **Range Slider**: `w-full accent-ocean cursor-pointer`, paired with `font-mono text-xl sm:text-2xl font-bold text-ocean tabular-nums`.
- **Inputs / Select / Textarea**: `w-full px-3.5 py-2.5 text-sm bg-pearl border border-mineral-line rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean focus:bg-white`.
- **Validation Error**: `text-xs text-rose-600 mt-1`.
- **Success State**: `p-5 rounded-xl bg-seaglass-mist border border-seaglass-line` with `text-seaglass-deep` icon + heading and `text-ocean underline` reset button.

### 6.6 Resilient Media & Video Containers
- **Photo Frame**: `rounded-2xl overflow-hidden border border-mineral-line bg-mineral`.
- **Fallback State**: `bg-gradient-to-br from-pearl via-seaglass-mist to-ocean-mist` with centered `text-ocean` `directions_bike` icon.
- **Video Card**: `bg-white rounded-2xl border border-mineral-line p-5 sm:p-7 space-y-4` containing `aspect-video w-full rounded-xl overflow-hidden bg-mineral border border-mineral-line`.

### 6.7 Footer
- `border-t border-mineral-line bg-mineral text-slate-600`, 12-col grid (`5/2/3/2`), links hover to `hover:text-ocean transition-colors`, bottom bar separated by `border-t border-mineral-line`.

---

## 7. Iconography, Photography & Brand Assets

- **Icons**: Google Material Icons (`Material Icons` font). Button icons: `!text-[18px] !w-[18px] !h-[18px] leading-none`. Inline checks/external links: `15px–16px`. Standalone card icons: default `24px` in `text-ocean`, `text-seaglass`, or `text-slate-700`.
- **Photography Art Direction**: Bright natural daylight, light architectural stone, lush greenery, clean matte frames, `16:9` hero and `4:3` feature crops.
- **Favicon**: Microchip megaphone icon (`/assets/aistudio/Gemini_Generated_Image_3d15ne3d15ne3d15_526e427f.png` & `/favicon.ico`); top navbar stays a crisp text-only **AshBike** wordmark.

---

## 8. Motion, Accessibility & Anti-Patterns

- **Transitions**: `transition-colors` on controls; `transition-transform duration-500 ease-out` on media; global `@media (prefers-reduced-motion: reduce)` override.
- **Focus Rings**: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean`.
- **Anti-Patterns**: No dark mode, no decorative `rounded-full` metadata pills, no `border-l-4` accent bars, no heavy card drop shadows (`shadow-lg`/`shadow-xl`), no pulsing status dots, no `gray-*` utilities.

---

## 9. Copy-Paste Starter Setup (Tailwind CSS v4)

```css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import "tailwindcss";

@theme {
  --font-display: "Outfit", ui-sans-serif, system-ui, sans-serif;
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;

  --color-pearl: #FAF9F6;
  --color-mineral: #EEF2F4;
  --color-mineral-soft: #F4F6F8;
  --color-mineral-line: #D4DEE4;

  --color-ocean: #0B4F78;
  --color-ocean-deep: #083A59;
  --color-ocean-mist: #E7F1F7;
  --color-ocean-line: #B8D2E3;

  --color-seaglass: #1D7A6E;
  --color-seaglass-deep: #155E55;
  --color-seaglass-mist: #E6F4F1;
  --color-seaglass-line: #B2DAD2;
}

@layer base {
  html {
    font-family: var(--font-sans);
    scroll-behavior: smooth;
    color-scheme: light;
    background-color: #FAF9F6;
    color: #0f172a;
  }

  h1, h2, h3, h4, .font-display {
    font-family: var(--font-display);
  }

  h1, h2 {
    text-wrap: balance;
  }
}

.tabular-nums {
  font-variant-numeric: tabular-nums;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```html
<body class="bg-pearl text-slate-900 antialiased selection:bg-ocean-mist selection:text-ocean-deep">
```
