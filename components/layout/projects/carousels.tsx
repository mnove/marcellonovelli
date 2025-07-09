import ImageCarouselBasic, {
  CarouselImages,
} from "@/components/commerce-ui/image-carousel-basic";

const stackzeroDashboardImages: CarouselImages = [
  {
    title: "Speaker 1",
    url: "/projects/stackzero-1.png",
  },
  {
    title: "Headphone 2",
    url: "/projects/stackzero-2.png",
  },
  {
    title: "Headphone 3",
    url: "/projects/stackzero-3.png",
  },
];

const hyperlaneImages: CarouselImages = [
  {
    title: "Speaker 1",
    url: "/projects/hyperlane-1.png",
  },
  {
    title: "Headphone 2",
    url: "/projects/hyperlane-2.png",
  },
  {
    title: "Headphone 3",
    url: "/projects/hyperlane-3.png",
  },
];

export function StackzeroUICarousel() {
  return (
    <ImageCarouselBasic
      className="bg-background"
      images={stackzeroDashboardImages}
      imageFit="contain"
      thumbPosition="left"
      showThumbs={true}
      classNameThumbnail="bg-secondary"
    />
  );
}

export function HyperlaneCarousel() {
  return (
    <ImageCarouselBasic
      className="bg-background"
      images={hyperlaneImages}
      imageFit="contain"
      thumbPosition="left"
      showThumbs={true}
      classNameThumbnail="bg-secondary"
    />
  );
}
