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
