import PhotoPolaroid from "./PhotoPolaroid";
import { Photo } from "@/types";

const timelinePhotos: Photo[] = [
  {
    id: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwN46F1RNW_9NzFhq24OeAWwNRJ-zidYdybJYXPnIrGV92ltMAMc4i8ad7Ai5A5P4IWSBNP6BJhdfXe9hwKOZYhjH1OuQ66dfEOx6bV1rOxGmlqP_ABq-dHjX39ewrGt4zaDoKlf_wUR2msyE5i5ygbyDbHbizR8154uGMbYaSnpm-YbwUIYA26WGzYdHE_qv4yTQp3kjfnY13aXeLN8cyHAcaCD0viqBWTpqMQQJj4dEs6_gASFWsVmpCGicgTa2TXwICuupEgsM",
    altText: "A warm photo of the couple at a coffee shop",
    caption: '"Where it all began..."',
    subtext: "First Date · Sept 2021",
    aspectRatio: "square",
    tilt: "left",
  },
  {
    id: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC19Yi4lx0NQRYRlSZRWMFE8Pxi7P3-Hi6Z2picBwqd8xnS4AmRGxjYTOSZaU2bTHVTYZQ3OZZ15oawiuCQnAGHDqI9mSf0xxVxME7b3G15iR4-TjdB8x5ORBCvkut_zAOHcMyTBy22EIq86Go5i0IT6cVfzk07xbx645C23F0RKUij05mPg3U3SfVpUF1T8J46di0kvetSJoM0V69kIOukU1vQgZk-lXTxLSzRMl5JrCH9ox5etrzfAiWEB2dOwR7EhvacAtSUgOM",
    altText: "Happy couple hiking with mountains in the background",
    caption: '"Our first adventure"',
    subtext: "Summer 2022",
    aspectRatio: "portrait",
    tilt: "right",
  },
  {
    id: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDb45nJyVLp-M1qNOuDdjSJRAgOMJkjxSDWSs4KEePwAm8xARYE5JRxu5nc4z4w7JoAsWg4ou5FuLXO352AVx0PlsFl7JuMtFWPphmGPgyeIX1WjMXryrWbsQYqmWmlcbyQtTnMF8GeOCtOqJG6CaDaXuWcEEBcndVCUd3Re2BAy96czEGiiYw0dqFj4mhxaTAR6bT9u3BGfI3dyAroF7AYeThb0fGOa_gvBX-tnxemOUGseLxnE0Wbupj_jwivHmOs-QMRV0gHFGY",
    altText: "Romantic dinner setting with candles and flowers",
    caption: '"A night to remember"',
    subtext: "1st Anniversary",
    aspectRatio: "landscape",
    tilt: "left",
  },
  {
    id: 4,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB88H6tFKdne0qUKS_CWcSJLduNVmDcJ8ClPLjQKIid3Ulaiu_720g0XrXP8YiPNuQALPvNxYrbiK-cZbcZsh0ZOmnxAtz5fC7VMPYZIgdIFX7y1ZMQgiPajpN2dsdN-YufrcRzN7LAXmt4zOHZZ6pfTKLtPmQIYBU_QjMP5T7odjXEonXb7rgcKakFrXDEE-vZ1W_lh5TN1kvYGktZtdLL5FfC_yiprN2AlLTKMw14g4t0tTnOJVGitkqE0gJqBd7rvEWSMSiMXJg",
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
