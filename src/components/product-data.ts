export type Product = {
  badge: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  {
    badge: "HOT",
    name: "AERORUN VELOCE",
    subtitle: "Race-day foam for forward momentum.",
    price: "$189",
    image: "/images/product-veloce.webp",
  },
  {
    badge: "NEW",
    name: "AERORUN PULSE",
    subtitle: "Responsive rhythm for daily miles.",
    price: "$169",
    image: "/images/product-pulse.webp",
  },
  {
    badge: "HOT",
    name: "AERORUN APEX",
    subtitle: "Maximum propulsion with soft landings.",
    price: "$199",
    image: "/images/product-apex.webp",
  },
  {
    badge: "LIMITED",
    name: "AERORUN URBAN",
    subtitle: "Street comfort with training DNA.",
    price: "$159",
    image: "/images/product-urban.webp",
  },
];

export const newArrivalProducts: Product[] = [
  {
    badge: "DROP",
    name: "AERORUN GLIDE",
    subtitle: "Translucent response for fresh city miles.",
    price: "$209",
    image: "/images/new-arrival-glide.webp",
  },
  {
    badge: "CARBON",
    name: "AERORUN STRATA",
    subtitle: "Graphite speed with a plated launch feel.",
    price: "$229",
    image: "/images/new-arrival-carbon.webp",
  },
  {
    badge: "NEW",
    name: "AERORUN LUMEN",
    subtitle: "Warm white cushioning with sharp energy return.",
    price: "$189",
    image: "/images/new-arrival-lumen.webp",
  },
  {
    badge: "LIMITED",
    name: "AERORUN NIGHT",
    subtitle: "Deep navy movement for late training windows.",
    price: "$199",
    image: "/images/new-arrival-night.webp",
  },
];

export const allSearchProducts = [...products, ...newArrivalProducts];
