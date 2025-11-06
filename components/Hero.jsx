"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}

export const products = [
  { title: "Marketing Site", thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png" },
  { title: "Web App", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
  { title: "E-commerce", thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png" },
  { title: "UI Library", thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png" },
  { title: "Tailwind Kit", thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png" },
  { title: "Bridge Suite", thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png" },
  { title: "Render Studio", thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png" },
  { title: "Academy", thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png" },
];
