import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Wine Bottle Holder",
    slug: "wine-bottle-holder",
    image: "/images/serving/bottleholder.png",
    category: "accessories",
  },
  {
    id: "2",
    name: "Wine Decanter",
    slug: "wine-decanter",
    image: "/images/serving/Decane.png",
    category: "accessories",
  },
  {
    id: "3",
    name: "Wine Rack",
    slug: "wine-rack",
    image: "/images/serving/bottlerack.png",
    category: "storage",
  },
  {
    id: "4",
    name: "Corkscrew",
    slug: "corkscrew",
    image: "/images/serving/corkscrew.png",
    category: "accessories",
  },
  {
    id: "5",
    name: "Wine Stopper",
    slug: "wine-stopper",
    image: "/images/serving/stopper.png",
    category: "accessories",
  },
  {
    id: "6",
    name: "Barrel Furniture",
    slug: "barrel-furniture",
    image: "/images/serving/Rustic Barrel Wine Tasting Table.png",
    category: "furniture",
  },
];

export const productDescriptions: Record<string, string> = {
  "wine-bottle-holder": "Bottle holders include the Credle and Banana Stand designs.",
  "wine-decanter": "Decanters are part of Kamaltara Enterprises' wine accessory range.",
  "wine-rack": "The range includes iron racks and wooden, acrylic, and stainless-steel wine stands and racks.",
  corkscrew: "Wine openers include Kamaltara's plastic T-type corkscrew.",
  "wine-stopper": "Cork, wooden, tapered-cork, and plastic PVC bottle stoppers are available.",
  "barrel-furniture": "Wine-barrel furniture is made from used oak barrels; oak wine barrels are also offered.",
};
