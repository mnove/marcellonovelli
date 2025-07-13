import ImageCarouselBasic, {
  CarouselImages,
} from "@/components/commerce-ui/image-carousel-basic";

const stackzeroDashboardImages: CarouselImages = [
  {
    title: "Screenshot 1",
    url: "/projects/stackzero-1.png",
  },
  {
    title: "Screenshot 2",
    url: "/projects/stackzero-2.png",
  },
  {
    title: "Screenshot 3",
    url: "/projects/stackzero-3.png",
  },
];

const hyperlaneImages: CarouselImages = [
  {
    title: "Screenshot 1",
    url: "/projects/hyperlane-1.png",
  },
  {
    title: "Screenshot 2",
    url: "/projects/hyperlane-2.png",
  },
  {
    title: "Screenshot 3",
    url: "/projects/hyperlane-3.png",
  },
];

const webtoolsImages: CarouselImages = [
  {
    title: "Screenshot 1",
    url: "/projects/101webtools-1.png",
  },
  {
    title: "Screenshot 2",
    url: "/projects/101webtools-2.png",
  },
  {
    title: "Screenshot 3",
    url: "/projects/101webtools-3.png",
  },
];

export function StackzeroUICarousel() {
  return (
    <ImageCarouselBasic
      className="bg-background"
      images={stackzeroDashboardImages}
      imageFit="contain"
      thumbPosition="bottom"
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
      thumbPosition="bottom"
      showThumbs={true}
      classNameThumbnail="bg-secondary"
    />
  );
}

export function WebtoolsCarousel() {
  return (
    <ImageCarouselBasic
      className="bg-background"
      images={webtoolsImages}
      imageFit="contain"
      thumbPosition="bottom"
      showThumbs={true}
      classNameThumbnail="bg-secondary"
    />
  );
}
