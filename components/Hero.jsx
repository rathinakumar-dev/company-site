"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}

export const products = [
  { title: "Marketing Site", thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png" },
  { title: "Web App", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
  { title: "E‑commerce", thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png" },
  { title: "CMS Setup", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png" },
  { title: "Automation", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png" },
  { title: "UI System", thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png" },
  { title: "Algo Utils", thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png" },
  { title: "UI Library", thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png" },
  { title: "Tailwind Kit", thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png" },
  { title: "Bridge Suite", thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png" },
  { title: "Render Studio", thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png" },
  { title: "Academy", thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png" },
];
