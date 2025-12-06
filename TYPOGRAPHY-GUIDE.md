# WEDRAW Typography & Spacing System

**A responsive, mobile-first design system for consistent typography across all screen sizes.**

---

## 📐 Overview

This system provides **two ways** to apply responsive typography:

1. **Tailwind Utilities** - For flexibility and one-off styling
2. **Semantic CSS Classes** - For consistency and reusability

Both approaches use **fluid `clamp()`** values that automatically scale between mobile and desktop, eliminating the need for manual breakpoint management.

---

## 🎯 Quick Reference

### Display Headings (Hero Sections)

| Class | Size Range | Usage |
|-------|------------|-------|
| `.display-xl` or `text-display-xl` | 48px → 85px | Main hero headings |
| `.display-lg` or `text-display-lg` | 40px → 72px | Large page titles |
| `.display-md` or `text-display-md` | 36px → 58px | Section heroes |
| `.display-sm` or `text-display-sm` | 32px → 48px | Subsection titles |

### Content Headings

| Class | Size Range | Usage |
|-------|------------|-------|
| `.heading-1` or `text-heading-1` | 28px → 38px | H1 - Major sections |
| `.heading-2` or `text-heading-2` | 24px → 32px | H2 - Subsections |
| `.heading-3` or `text-heading-3` | 20px → 30px | H3 - Component titles |
| `.heading-4` or `text-heading-4` | 18px → 24px | H4 - Small headings |

### Body Text

| Class | Size Range | Usage |
|-------|------------|-------|
| `.body-xl` or `text-body-xl` | 18px → 24px | Featured paragraphs |
| `.body-lg` or `text-body-lg` | 16px → 20px | Large body text |
| `.body-md` or `text-body-md` | 14px → 18px | Standard paragraphs |
| `.body-sm` or `text-body-sm` | 12px → 15px | Small text |
| `.body-xs` or `text-body-xs` | 10px → 14px | Captions, footnotes |

### Labels & Metadata

| Class | Size Range | Usage |
|-------|------------|-------|
| `.label-lg` or `text-label-lg` | 12px → 16px | Large buttons, tags |
| `.label-md` or `text-label-md` | 10px → 14px | Standard labels |
| `.label-sm` or `text-label-sm` | 9px → 12px | Small metadata |

---

## 📏 Fluid Spacing System

Use these for responsive padding, margin, and gap:

| Utility | Size Range | Pixels |
|---------|------------|--------|
| `p-fluid-xs` / `m-fluid-xs` / `gap-fluid-xs` | 0.5rem → 1rem | 8px → 16px |
| `p-fluid-sm` / `m-fluid-sm` / `gap-fluid-sm` | 0.75rem → 1.5rem | 12px → 24px |
| `p-fluid-md` / `m-fluid-md` / `gap-fluid-md` | 1rem → 2rem | 16px → 32px |
| `p-fluid-lg` / `m-fluid-lg` / `gap-fluid-lg` | 1.5rem → 3rem | 24px → 48px |
| `p-fluid-xl` / `m-fluid-xl` / `gap-fluid-xl` | 2rem → 4rem | 32px → 64px |
| `p-fluid-2xl` / `m-fluid-2xl` / `gap-fluid-2xl` | 3rem → 6rem | 48px → 96px |
| `p-fluid-3xl` / `m-fluid-3xl` / `gap-fluid-3xl` | 4rem → 8rem | 64px → 128px |

---

## 🔧 Usage Examples

### Method 1: Semantic CSS Classes (Recommended for Consistency)

```tsx
// Hero Section
<h1 className="display-xl text-blueprint">
  Shaping unforgettable experiences
</h1>

// Section Title
<h2 className="display-md text-marker mb-fluid-md">
  Our Expertise
</h2>

// Body Paragraph
<p className="body-lg">
  We are a specialised event design studio...
</p>

// Small Metadata
<p className="label-md text-marker">
  BRISTOL | 2024
</p>
```

**✅ Benefits:**
- Pre-configured font family, weight, and color
- Consistent across the entire site
- Easy to remember and use
- Includes default dark-grey color for body text

---

### Method 2: Tailwind Utilities (For Flexibility)

```tsx
// Custom colored heading
<h1 className="text-display-xl font-area-extrabold text-sunny leading-[120%]">
  Journal Highlights
</h1>

// Body text with custom color
<p className="text-body-md font-area-normal text-white leading-[160%]">
  Custom styled paragraph...
</p>

// Label with custom styling
<span className="text-label-lg font-mono-medium uppercase tracking-wider text-meadow">
  READ MORE
</span>
```

**✅ Benefits:**
- Full control over font, weight, color
- Mix and match utilities
- Override defaults when needed

---

## 📱 Responsive Spacing Examples

### Padding

```tsx
// Section padding that scales from mobile to desktop
<section className="py-fluid-2xl px-fluid-md">
  {/* Content */}
</section>

// Equivalent to: padding-top/bottom: 48px → 96px, padding-left/right: 16px → 32px
```

### Margin

```tsx
// Responsive margin bottom
<div className="mb-fluid-xl">
  {/* Content */}
</div>

// Equivalent to: margin-bottom: 32px → 64px
```

### Gap (for Flexbox/Grid)

```tsx
// Responsive gap in a flex container
<div className="flex flex-col gap-fluid-lg">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Equivalent to: gap: 24px → 48px
```

---

## 🎨 Combining with Colors

All typography classes work seamlessly with Tailwind color utilities:

```tsx
// Display heading with brand color
<h1 className="display-xl text-blueprint">Title</h1>

// Body text with custom color (overrides default dark-grey)
<p className="body-lg text-meadow">Green text paragraph</p>

// Label with marker red
<span className="label-md text-marker">FEATURED</span>
```

---

## 🔄 Migration Guide

### Before (Fixed Sizes)

```tsx
// ❌ Old way - breaks on mobile
<h1 className="text-[85px] font-extrabold leading-[120%]">
  Title
</h1>

<p className="text-[18px] font-normal leading-[160%] text-dark-grey">
  Paragraph text
</p>

<div style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>
  Custom clamp
</div>
```

### After (Responsive)

```tsx
// ✅ New way - responsive across all devices
<h1 className="display-xl">
  Title
</h1>

<p className="body-md">
  Paragraph text
</p>

<div className="text-body-md">
  Using Tailwind utility
</div>
```

---

## 📊 Complete Typography Scale

### Visual Scale Hierarchy

```
DISPLAY SIZES (Hero Headings)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.display-xl    48px ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 85px
.display-lg    40px ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 72px
.display-md    36px ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 58px
.display-sm    32px ━━━━━━━━━━━━━━━━━━━━━━━━━━ 48px

HEADINGS (Content Hierarchy)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.heading-1     28px ━━━━━━━━━━━━━━━━━━━━━━ 38px
.heading-2     24px ━━━━━━━━━━━━━━━━━━ 32px
.heading-3     20px ━━━━━━━━━━━━━━━━ 30px
.heading-4     18px ━━━━━━━━━━━━━ 24px

BODY TEXT (Paragraphs)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.body-xl       18px ━━━━━━━━━━━━━━ 24px
.body-lg       16px ━━━━━━━━━━━━ 20px
.body-md       14px ━━━━━━━━━━ 18px
.body-sm       12px ━━━━━━━━ 15px
.body-xs       10px ━━━━━━ 14px

LABELS (Metadata)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.label-lg      12px ━━━━━━━━━ 16px
.label-md      10px ━━━━━━ 14px
.label-sm       9px ━━━━ 12px
```

---

## 🎯 Design Tokens Reference

These are now available as Tailwind utilities throughout your project:

### Font Families
- `font-sans` → Area Normal (default)
- `font-mono` → Degular Mono

### Font Weights
- `font-area-thin` → 100
- `font-area-normal` → 400 *(most body text)*
- `font-area-semibold` → 600
- `font-area-bold` → 700 *(headings)*
- `font-area-extrabold` → 800 *(display headings)*
- `font-area-black` → 900
- `font-mono-normal` → 400
- `font-mono-medium` → 500 *(labels, buttons)*
- `font-mono-bold` → 700

### Brand Colors
- `text-blueprint` / `bg-blueprint` → #2242FF (Blue)
- `text-marker` / `bg-marker` → #E44E37 (Red)
- `text-meadow` / `bg-meadow` → #04A573 (Green)
- `text-sunny` / `bg-sunny` → #FFB300 (Yellow)
- `text-dark-grey` / `bg-dark-grey` → #232838

---

## ✅ Best Practices

### DO ✅

```tsx
// Use semantic classes for standard content
<h1 className="display-xl text-marker">Hero Title</h1>
<p className="body-lg">Standard paragraph</p>

// Use fluid spacing for responsive layouts
<section className="py-fluid-2xl px-fluid-md">

// Combine with Tailwind utilities
<h2 className="display-md text-meadow mb-fluid-lg">
```

### DON'T ❌

```tsx
// Don't use fixed pixel sizes
<h1 className="text-[85px]">Title</h1>

// Don't use inline clamp() when we have utilities
<p style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>

// Don't use arbitrary values for spacing
<div className="mb-[48px]">
```

---

## 🔍 When to Use What

| Scenario | Use This |
|----------|----------|
| Main page hero | `.display-xl` or `.display-lg` |
| Section titles | `.display-md` or `.display-sm` |
| Article headings | `.heading-1` through `.heading-4` |
| Featured text | `.body-xl` |
| Standard paragraphs | `.body-lg` or `.body-md` |
| Captions, small text | `.body-sm` or `.body-xs` |
| Buttons, tags | `.label-lg` or `.label-md` |
| Metadata | `.label-sm` or `.label-md` |
| Section spacing | `py-fluid-2xl px-fluid-md` |
| Element margins | `mb-fluid-lg` or `mt-fluid-md` |
| Grid/flex gaps | `gap-fluid-lg` |

---

## 📝 Component Examples

### Hero Section

```tsx
<section className="relative min-h-screen py-fluid-3xl px-fluid-lg">
  <h1 className="display-xl text-blueprint mb-fluid-lg">
    Shaping unforgettable experiences
  </h1>
  <p className="body-xl max-w-2xl">
    We are a specialised event design studio...
  </p>
</section>
```

### Content Section

```tsx
<section className="py-fluid-2xl px-fluid-md">
  <h2 className="display-md text-marker mb-fluid-md">
    Our Expertise
  </h2>
  <div className="space-y-fluid-lg">
    <p className="body-lg">
      First paragraph...
    </p>
    <p className="body-md">
      Second paragraph...
    </p>
  </div>
</section>
```

### Card Component

```tsx
<article className="p-fluid-md">
  <span className="label-md text-sunny mb-fluid-sm block">
    BRISTOL | 2024
  </span>
  <h3 className="heading-2 mb-fluid-sm">
    Project Title
  </h3>
  <p className="body-sm">
    Project description...
  </p>
</article>
```

---

## 🧪 Testing

Test your typography at these key widths:

- **320px** - iPhone SE (smallest)
- **375px** - iPhone 14
- **768px** - iPad Portrait
- **1024px** - iPad Landscape / Small Laptop
- **1440px** - Desktop
- **1920px** - Large Desktop

**Expected Behavior:**
- Text should be **readable** at all sizes (no zooming needed)
- No **horizontal scrolling**
- Proper **visual hierarchy** maintained
- Smooth **scaling** between breakpoints (no jumps)

---

## 🔗 Related Files

- **Typography Config**: `tailwind.config.ts` (lines 50-62)
- **Semantic Classes**: `src/app/globals.css` (bottom section)
- **Button Component**: `src/app/components/Button.tsx` (already uses clamp)
- **This Guide**: `TYPOGRAPHY-GUIDE.md`

---

## 💡 Questions?

**Q: Can I override the default colors in semantic classes?**  
A: Yes! `<p className="body-lg text-marker">` will override the default dark-grey.

**Q: Should I use semantic classes or Tailwind utilities?**  
A: Use **semantic classes** for standard content, **Tailwind utilities** when you need custom styling.

**Q: What about line-height and letter-spacing?**  
A: They're already included in the typography classes! But you can override with `leading-*` and `tracking-*` utilities if needed.

**Q: Can I add more sizes?**  
A: Yes! Add them to `tailwind.config.ts` fontSize section and create matching classes in `globals.css`.

---

**Built with ❤️ for the WEDRAW design system**

