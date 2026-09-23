/**
 * SpiceNest Restaurant Configuration
 * 
 * ALL business content, imagery, colors, typography, services,
 * opening hours, and contact details are configured in this file.
 * Non-technical owners can edit this single file to update the entire website.
 */

// Image assets
import heroImage from '../assets/images/hero_luxury_dining_1790192469814.jpg';
import dishImage from '../assets/images/dish_tasting_menu_1790192480891.jpg';
import privateDiningImage from '../assets/images/private_dining_table_1790192492974.jpg';
import barCellarImage from '../assets/images/bar_cellar_pairing_1790192503150.jpg';
import aboutImage from '../assets/images/about_interior_space_1790192513963.jpg';

export const business = {
  // Identity & Brand
  name: "SpiceNest Restaurant",
  shortName: "SpiceNest",
  type: "Restaurant",
  tagline: "Where Flavor Meets Elegance",
  brandStyle: "Luxury",
  
  // Theme Colors
  colors: {
    primary: "#0B3D2E",
    secondary: "#D4AF37",
    background: "#FAF8F5",
    surface: "#FFFFFF",
    surfaceAlt: "#F3EFEA",
    ink: "#181C1A",
    inkMuted: "#565D59",
    accent: "#D4AF37",
  },

  // Location & Contact Details
  location: {
    cityArea: "28 Hereford Court Danes Gate, Harrow, England, HA1 4UG",
    fullAddress: "28 Hereford Court, Danes Gate, Harrow, England, HA1 4UG",
    shortAddress: "Danes Gate, Harrow, England",
    postalCode: "HA1 4UG",
    mapsUrl: "https://maps.google.com/?q=28+Hereford+Court+Danes+Gate+Harrow+England+HA1+4UG",
    directionsLabel: "Get Directions",
  },

  contact: {
    phone: "447498579857",
    phoneDisplay: "+44 7498 579857",
    phoneHref: "tel:447498579857",
    whatsappNumber: "447498579857",
    whatsappDisplay: "+44 7498 579857",
    whatsappHref: "https://wa.me/447498579857?text=Hello%20SpiceNest%20Restaurant%2C%20I%20would%20like%20to%20enquire%20about%20a%20table%20reservation.",
    email: "enquiries@spicenest.co.uk",
    emailHref: "mailto:enquiries@spicenest.co.uk",
  },

  // Call-to-actions
  actions: {
    primaryCta: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447498579857?text=Hello%20SpiceNest%20Restaurant%2C%20I%20would%20like%20to%20enquire%20about%20a%20table%20reservation.",
      isExternal: true,
    },
    secondaryCta: {
      label: "Contact Us",
      href: "#contact",
      isExternal: false,
    },
    reserveCta: {
      label: "Book a Table",
      href: "#contact",
      isExternal: false,
    }
  },

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Section Content
  hero: {
    eyebrow: "Harrow · Fine Dining Restaurant",
    headline: "Where Flavor Meets Elegance",
    subheadline: "An authentic culinary destination on Danes Gate in Harrow, where centuries of fragrant spice traditions unite with refined contemporary gastronomy.",
    image: heroImage,
    imageAlt: "Intimate candlelit dining room at SpiceNest Restaurant in Harrow",
    trustNote: "Tuesday – Sunday dinner & weekend lunch · Danes Gate, Harrow",
  },

  // About Section Content
  about: {
    eyebrow: "The SpiceNest Philosophy",
    heading: "A quiet sanctuary for culinary devotion in Harrow",
    paragraphOne: "SpiceNest was founded on a simple conviction: that spices should sing with nuance, warmth, and depth rather than overwhelming heat. Tucked into Danes Gate in Harrow, our dining room provides an intimate escape from the bustling town.",
    paragraphTwo: "Every dish reflects meticulous preparation—from whole spices slowly roasted and stone-ground daily, to premier seasonal British meats and market produce. We invite our guests to slow down, share stories, and savor refined hospitality.",
    image: aboutImage,
    imageAlt: "Sophisticated interior dining room of SpiceNest Restaurant",
    highlights: [
      { label: "Location", value: "Danes Gate, Harrow" },
      { label: "Ambiance", value: "Warm, candlelit luxury" },
      { label: "Hospitality", value: "Dedicated table service" },
    ]
  },

  // Services / Offerings
  servicesEyebrow: "Culinary Offerings",
  servicesHeading: "Thoughtfully crafted dining experiences",
  servicesIntro: "From evening tasting courses to private celebrations, each offering is prepared with uncompromising care.",
  services: [
    {
      id: "fine-dining",
      title: "Fine Dining & Tasting Menus",
      category: "Main Service",
      description: "A multi-course progression showcasing hand-ground regional spices, slow-braised cuts, and delicate modern textures.",
      details: "Available for dinner seatings Tuesday through Sunday, with optional sommelier beverage pairings.",
      image: dishImage,
      imageAlt: "Artfully plated signature dish at SpiceNest Restaurant",
      ctaText: "Enquire via WhatsApp",
      ctaHref: "https://wa.me/447498579857?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Fine%20Dining%20Tasting%20Menu.",
    },
    {
      id: "private-dining",
      title: "Private Dining & Special Gatherings",
      category: "Celebrations",
      description: "An exclusive room set aside for milestone birthdays, intimate family dinners, and private corporate hosting.",
      details: "Customised menus, bespoke table arrangements, and dedicated attendant staff for up to 24 guests.",
      image: privateDiningImage,
      imageAlt: "Private dining room setting with candles and golden accents",
      ctaText: "Plan Private Event",
      ctaHref: "https://wa.me/447498579857?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Private%20Dining%20at%20SpiceNest.",
    },
    {
      id: "cellar-pairings",
      title: "Curated Cellar & Botanical Pairings",
      category: "Sommelier Selection",
      description: "Balanced old and new-world vintages specifically selected to complement the aromatic depth of our spice profiles.",
      details: "Includes house-infused botanicals, craft aperitifs, and refined non-alcoholic tea infusions.",
      image: barCellarImage,
      imageAlt: "Handcrafted cocktail and vintage wine selections at the bar",
      ctaText: "Discover Pairings",
      ctaHref: "#contact",
    }
  ],

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "Why Choose SpiceNest",
    heading: "Crafted for discerning palates in Harrow",
    intro: "We focus on unhurried dining, authentic spice craftsmanship, and genuine neighborhood warmth.",
    items: [
      {
        number: "01",
        title: "Daily Stone-Ground Spices",
        description: "We roast whole botanical spices each morning to preserve their delicate aromatic oils, ensuring vivid depth in every bite."
      },
      {
        number: "02",
        title: "Central Harrow Sanctuary",
        description: "Conveniently situated on Danes Gate with a peaceful, discreet entrance designed for unhurried evenings."
      },
      {
        number: "03",
        title: "Attentive Table Hospitality",
        description: "From dietary accommodations to wine guidance, our team ensures your evening feels tailored, relaxed, and memorable."
      },
      {
        number: "04",
        title: "Seasonal Fresh Ingredients",
        description: "We partner with trusted regional suppliers for prime meats, ocean catches, and crisp market vegetables."
      }
    ]
  },

  // Testimonials (Omitted per instructions since {{TESTIMONIALS}} was empty)
  testimonials: null,

  // Opening Hours
  openingHours: {
    eyebrow: "Hours of Service",
    heading: "Opening Hours",
    schedule: [
      { day: "Tuesday – Thursday", hours: "17:00 – 22:30", note: "Dinner Service" },
      { day: "Friday – Saturday", hours: "12:00 – 23:00", note: "Lunch & Dinner" },
      { day: "Sunday", hours: "12:00 – 22:00", note: "All-day Dining" },
      { day: "Monday", hours: "Closed", note: "Rest & Prep Day" },
    ],
    lastSeating: "Kitchen closes 45 minutes prior to closing time.",
  },

  // Contact Section
  contactSection: {
    eyebrow: "Reservations & Enquiries",
    heading: "Join us at SpiceNest",
    description: "Whether planning an intimate dinner or reserving private dining for a milestone celebration, we look forward to welcoming you.",
    formTitle: "Reserve or Enquire",
    formDescription: "Leave your details and preferred date; our reservations team responds promptly.",
  },

  // FAQ Section (Selected 4 high-value local restaurant questions)
  faq: {
    eyebrow: "Helpful Details",
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Do you recommend booking in advance?",
        answer: "Yes, we strongly recommend reserving in advance, particularly for Friday and Saturday evenings, to guarantee your preferred table timing."
      },
      {
        question: "Can dietary restrictions and allergies be accommodated?",
        answer: "Certainly. Our chefs prepare our dishes fresh to order and can seamlessly accommodate vegetarian, vegan, halal, gluten-free, and specific nut allergies with advance notice."
      },
      {
        question: "How do I enquire about private dining or private hire?",
        answer: "You can message us directly on WhatsApp at +44 7498 579857 or submit the contact form below with your expected guest count and date."
      },
      {
        question: "Is there parking available near the restaurant?",
        answer: "Yes, convenient local parking facilities and street bays are accessible within a short two-minute stroll along Danes Gate and surrounding streets in central Harrow."
      }
    ]
  },

  // Footer Content
  footer: {
    copyrightNotice: `© ${new Date().getFullYear()} SpiceNest Restaurant. All rights reserved.`,
    legalNote: "28 Hereford Court, Danes Gate, Harrow, England, HA1 4UG · 07498 579857",
  }
};
