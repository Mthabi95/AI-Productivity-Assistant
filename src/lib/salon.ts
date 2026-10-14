import hero from "@/assets/hero.jpg";
import braids from "@/assets/braids.jpg";
import haircut from "@/assets/haircut.jpg";
import curls from "@/assets/curls.jpg";

export const images = { hero, braids, haircut, curls };

// Prices are placeholders until the owner supplies real pricing.
export const services = [
  { id: "haircut", name: "Toddler Haircuts", desc: "Gentle, patient trims and neat little cuts.", duration: "20–30 min", price: "R — (placeholder)", img: haircut },
  { id: "natural", name: "Natural Hair Styling", desc: "Soft, caring styling for curls, coils and textured hair.", duration: "45–60 min", price: "R — (placeholder)", img: curls },
  { id: "braids", name: "Mini Braids & Plaits", desc: "Neat, comfortable braids sized for little heads.", duration: "60–90 min", price: "R — (placeholder)", img: braids },
  { id: "puffs", name: "Ponytails & Puff Styles", desc: "Playful puffs and ponytails with bobbles and bows.", duration: "20–40 min", price: "R — (placeholder)", img: hero },
  { id: "wash", name: "Wash & Gentle Detangling", desc: "A calm wash and tear-free detangle.", duration: "30 min", price: "R — (placeholder)", img: curls },
  { id: "occasion", name: "Special Occasion Styles", desc: "Birthdays, weddings and photo days.", duration: "60+ min", price: "R — (placeholder)", img: braids },
] as const;

export const gallery = [
  { src: haircut, cat: "Haircuts", alt: "Toddler with a neat short haircut" },
  { src: curls, cat: "Natural Styles", alt: "Toddler with defined natural curls and a bow" },
  { src: braids, cat: "Braids", alt: "Mini cornrow braids with beads" },
  { src: hero, cat: "Puffs and Ponytails", alt: "Toddler with two natural puffs" },
  { src: braids, cat: "Special Occasions", alt: "Braided style with beads for a special day" },
  { src: curls, cat: "Special Occasions", alt: "Curly style with a pink bow" },
];

export const faqs = [
  ["What age group does TinyTresses Salon serve?", "We specialise exclusively in toddlers. (Owner to confirm exact age range.)"],
  ["Do I need to book an appointment?", "We recommend booking ahead using our appointment request form."],
  ["How long does a toddler hairstyle take?", "It depends on the style — see the estimated duration on each service."],
  ["What should I bring to the appointment?", "A favourite toy or snack can help your little one feel at ease."],
  ["Can I request a particular hairstyle?", "Yes! Add your request in the booking form's special requests field."],
  ["What happens if my toddler becomes restless?", "We take breaks and go at your child's pace. (Owner to confirm details.)"],
  ["What payment methods do you accept?", "To be confirmed by the salon — please contact us."],
  ["What is the cancellation policy?", "To be confirmed by the salon — please contact us."],
];
