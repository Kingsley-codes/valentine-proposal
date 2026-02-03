import PhotoPolaroid from "./PhotoPolaroid";
import { Photo } from "@/types";

const timelinePhotos: Photo[] = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1770149413/stiuuc0yjhsgpqne173n.jpg",
    altText: "A warm photo of the couple at a coffee shop",
    caption: '"Where it all began..."',
    subtext: "The screenshot message that started it all",
    aspectRatio: "square",
    tilt: "left",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1770149561/lqy50koi5wkfo3h9neto.jpg",
    altText: "Happy couple hiking with mountains in the background",
    caption: '"Our first photoshoot"',
    subtext: "A sign of many beautiful memories to come",
    aspectRatio: "portrait",
    tilt: "right",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1770149540/u5menmbpiwzuncaqasao.jpg",
    altText: "Romantic dinner setting with candles and flowers",
    caption: '"When beauty invaded NYSC camp"',
    subtext: "NYSC camp memories. No words needed",
    aspectRatio: "portrait",
    tilt: "left",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1770149418/w6n6lfqkdzin5lf2tjsr.png",
    altText: "Romantic dinner setting with candles and flowers",
    caption: '"A night to remember"',
    subtext: "Last year's valentine's day",
    aspectRatio: "portrait",
    tilt: "left",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1770149414/pv90cnwze4c9psgddcko.jpg",
    altText: "Close up of Josephine smiling beautifully",
    caption: '"My favorite smile"',
    subtext: "Just because",
    aspectRatio: "square",
    tilt: "right",
  },
];

export default function TimelineSection() {
  return (
    <div className="flex flex-col gap-10 p-6 py-10 relative mx-auto max-w-7xl">
      {/* Timeline connector line - hidden on mobile, visible on desktop */}
      <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-[rgba(238,43,91,0.25)] -translate-x-1/2" />

      {timelinePhotos.map((photo) => (
        <div key={photo.id} className="w-full py-4">
          <PhotoPolaroid {...photo} position="center" />
        </div>
      ))}
    </div>
  );
}
