# Design Guidelines for Nationwide Energies

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern B2B utility providers including Yu Energy, Octopus Energy, and Bulb, while creating a distinct identity. The design prioritizes trust, clarity, and conversion optimization for business customers.

## Core Design Principles
- Professional simplicity with clear hierarchy
- Trust-building through clean layouts and transparent information
- Conversion-focused with prominent CTAs
- Mobile-first responsive design

## Color Palette

### Primary Colors
- **Deep Navy**: 220 45% 20% (primary brand, headers, navigation)
- **Emerald Green**: 160 65% 45% (trust, sustainability, green energy)
- **Bright Orange**: 25 95% 55% (CTAs, accents, urgency)

### Supporting Colors
- **Light Gray**: 220 15% 96% (backgrounds, cards)
- **Medium Gray**: 220 10% 60% (secondary text)
- **Dark Text**: 220 25% 15% (body text)
- **White**: 0 0% 100% (card backgrounds, contrast)

### Semantic Colors
- Success: 145 65% 45%
- Warning: 40 95% 55%
- Info: 210 80% 55%

## Typography

**Primary Font**: Inter (Google Fonts)
- Headings: 600-700 weight
- Body: 400 weight
- Emphasis: 500 weight

**Font Sizes**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl
- Section Headings: text-3xl md:text-4xl
- Subsection Headings: text-2xl md:text-3xl
- Card Titles: text-xl md:text-2xl
- Body: text-base md:text-lg
- Small Text: text-sm

## Layout System

**Spacing Units**: Consistent use of 4, 8, 12, 16, 20, 24, 32 (Tailwind: p-4, p-8, p-12, etc.)

**Container Widths**:
- Max content width: max-w-7xl
- Text content: max-w-4xl
- Form sections: max-w-2xl

**Grid Patterns**:
- Feature grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Two-column layouts: grid-cols-1 lg:grid-cols-2
- Service cards: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4

## Component Library

### Navigation
- Sticky header with white background, subtle shadow
- Logo on left (simple "NE" monogram + "Nationwide Energies" text)
- Horizontal menu: Home, Electricity, Gas, Water, Green Energy, Get Quote, Contact
- Mobile: Hamburger menu with slide-out drawer
- Orange CTA button in header: "Get a Quote"

### Hero Section (Homepage)
- Large hero image showing modern business/industrial setting with energy infrastructure
- Height: min-h-[600px] lg:min-h-[700px]
- Overlay gradient: Deep navy to transparent
- White text with bold headline
- Subheadline describing service
- Two CTAs: Primary (Orange "Get a Quote"), Secondary (Outline "Learn More" with blurred background)
- Trust badge: "Supporting 50,000+ Businesses"

### Service Cards
- White background with subtle shadow
- Icon at top (colored circle with white icon inside)
- Card title in Deep Navy
- Brief description
- Hover: Slight lift effect, shadow increase
- Green "Learn More" link at bottom

### Three-Step Process Section
- Numbered circular badges (Emerald Green background, white numbers)
- Clear step titles and descriptions
- Connected by dotted lines on desktop
- Vertical stacked on mobile

### CTA Sections
- Full-width colored backgrounds (alternating Deep Navy and Emerald Green)
- White text, centered content
- Large headline with supporting text
- Prominent Orange button
- Breathing room with py-20

### Form Components
- Input fields: White background, light gray border, rounded corners
- Labels: Medium gray, positioned above inputs
- Focus states: Emerald Green border
- Submit buttons: Orange with white text
- Form sections include contextual information (office hours, response time)

### Footer
- Deep Navy background, white/light gray text
- Four columns: About, Services, Support, Contact
- Newsletter signup section
- Social media icons
- Registered office address displayed prominently
- Copyright and links at bottom

## Images

### Hero Images
- Homepage: Modern office building with solar panels or wind turbines visible
- Electricity page: Industrial electrical infrastructure, substations
- Gas page: Modern gas infrastructure or industrial facility
- Water page: Water treatment facility or industrial water systems
- Green Energy: Wind farm or solar panel arrays with blue sky

### Supporting Images
- Team/office photos for About page
- Icon-based illustrations for features (avoid stock photos for small elements)
- Trust indicators: Certification badges, partner logos

### Image Treatment
- Full-bleed hero images with gradient overlays
- Rounded corners (rounded-lg) for content images
- Consistent aspect ratios within sections

## Page-Specific Guidelines

### Homepage
Sections: Hero, Three-Step Process, Services Overview (grid), Why Choose Us, Green Energy Highlight, Get Quote CTA, Trust Indicators

### Service Pages (Electricity, Gas, Water)
Sections: Hero with service-specific image, Plan Types (cards), Benefits, Pricing approach, FAQ, Get Quote CTA

### Green Energy Page
Sections: Hero with renewable energy imagery, 100% Renewable badge, Benefits grid, How It Works, Certifications, CTA

### Get a Quote Page
Two-column layout: Form on left, Benefits/Info on right
Small business vs. Large business options
Contact alternatives (phone, email)

### Contact Page
Form with company address displayed prominently
Office hours and response expectations
Map integration or location illustration

## Accessibility & Interactions
- Maintain WCAG AA contrast ratios
- Focus indicators on all interactive elements
- Smooth scroll behavior for anchor links
- Subtle hover states on cards and buttons
- No distracting animations
- Skeleton loaders for async content