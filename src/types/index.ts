export interface Photo {
  id: number;
  imageUrl: string;
  altText: string;
  caption: string;
  subtext: string;
  aspectRatio: "square" | "portrait" | "landscape";
  tilt: "left" | "right" | "none";
}

export interface MemoryCard {
  id: number;
  imageUrl: string;
  altText: string;
  title: string;
}

export interface TimelineItem extends Photo {
  position: "left" | "right" | "center";
}
