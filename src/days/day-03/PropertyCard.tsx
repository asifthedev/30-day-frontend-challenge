import { useEffect, useState } from "react";
import maxicon from "./assets/maximize.svg";
import homeicon from "./assets/home.svg";

type CardProps = {
  images: string[];
  price: string;
  priceLabel: string;
  title: string;
  location: string;
  author: string;
  postedAgo: string;
  livingArea: string;
  rooms: string;
  ctaLabel: string;
  ctaHref: string;
};

const propertyCardDemo: CardProps = {
  images: [
    new URL("./assets/bg1.avif", import.meta.url).href,
    new URL("./assets/bg2.jpg", import.meta.url).href,
    new URL("./assets/bg3.png", import.meta.url).href,
    new URL("./assets/bg4.jpg", import.meta.url).href,
  ],
  price: "$56,000",
  priceLabel: "List Price",
  title: "Guillaume Briard",
  location: "Harry Konigsberg's, 1063 AG",
  author: "Asif Shahzad",
  postedAgo: "2 days ago",
  livingArea: "29m²",
  rooms: "2",
  ctaLabel: "Learn More",
  ctaHref: "#",
};

function Card(props: Partial<CardProps> = {}) {
  const {
    images = propertyCardDemo.images,
    price = propertyCardDemo.price,
    priceLabel = propertyCardDemo.priceLabel,
    title = propertyCardDemo.title,
    location = propertyCardDemo.location,
    author = propertyCardDemo.author,
    postedAgo = propertyCardDemo.postedAgo,
    livingArea = propertyCardDemo.livingArea,
    rooms = propertyCardDemo.rooms,
    ctaLabel = propertyCardDemo.ctaLabel,
    ctaHref = propertyCardDemo.ctaHref,
  } = props;
  const [isSliderStopped, setIsSliderStopped] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Keep a fallback so the component still renders even if no images come through.
  const sliderImages = images.length > 0 ? images : [""];

  // Auto-advance the card images unless the user is hovering the slider.
  useEffect(() => {
    if (isSliderStopped || sliderImages.length === 0) return;

    const intervalRef = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 2000);

    return () => clearInterval(intervalRef);
  }, [isSliderStopped, sliderImages.length]);

  const currentImage = sliderImages[currentImageIndex];

  return (
    <>
      <div
        aria-label="card"
        className={`flex min-w-0 gap-4 flex-col bg-white rounded-[20px] p-3 border border-gray-200 card-shadow sm:flex-row lg:flex-col lg:w-85`}
      >
        {/* Image area with simple dots for manual image switching. */}
        <div
          aria-label="image-slider"
          className="relative w-full overflow-hidden rounded-[13px] border border-gray-200/70  sm:w-1/2 aspect-4/3 md:w-1/2 md: lg:w-full"
          onMouseEnter={() =>
            setIsSliderStopped((prev) => {
              prev = true;
              return prev;
            })
          }
          onMouseLeave={() =>
            setIsSliderStopped((prev) => {
              prev = false;
              return prev;
            })
          }
        >
          <img
            key={currentImage}
            src={currentImage}
            alt=""
            className="w-full h-full object-cover animate-slide-in-left"
          />

          <div
            aria-label="slider-navigation"
            className="absolute flex w-fit gap-1 p-0.5 bg-gray-400/20 rounded-full bottom-4 border-gray-400 border backdrop-blur-lg left-1/2 -translate-x-1/2 select-none "
          >
            {sliderImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${currentImageIndex == index ? "bg-white" : "bg-white/40"}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Show image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right side content: pricing, details, author, and CTA. */}
        <div className="flex flex-col gap-4 sm:w-1/2 2md:w-1/2 md:h-full lg:w-full">
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-xl text-gray-950">
                {price}
              </span>

              <span className="text-sm font-medium text-gray-500">
                {priceLabel}
              </span>
            </div>
            <div>
              <span className="font-semibold text-sm text-gray-800">
                {title} •{" "}
              </span>
              <span className="text-sm text-gray-500">{location}</span>
            </div>
          </div>

          {/* A quick stats strip so the card feels more useful at a glance. */}
          <div className="flex flex-wrap items-center border-gray-300 border-y py-3 gap-4 md:flex-nowrap">
            <div className="flex items-center justify-center gap-1">
              <img src={maxicon} alt="" className="w-4 " />
              <span className="text-sm font-semibold text-gray-900">
                {livingArea}
              </span>
              <span className="text-sm text-gray-500 font-medium">Living</span>
            </div>

            <div className="bg-gray-400 h-5 w-px"></div>

            <div className="flex items-center justify-center gap-1">
              <img src={homeicon} alt="" className="w-4" />

              <span className="font-bold text-sm text-gray-900">{rooms}</span>
              <span className="text-sm text-gray-500 font-medium">Rooms</span>
            </div>
          </div>

          {/* Small metadata line for the author and posting time. */}
          <div className="flex justify-between text-sm">
            <div>
              <span className="text-gray-400">By</span>
              <span className="text-gray-300"> • </span>
              <span className="font-semibold text-gray-800 underline decoration-0 underline-offset-3">
                {author}
              </span>
            </div>
            <div className="text-gray-500 font-medium">{postedAgo}</div>
          </div>

          {/* Primary action button for whatever the card is meant to drive. */}
          <a
            href={ctaHref}
            className="bg-black text-white p-2.5 rounded-full mt-2 shadow "
          >
            <button className="w-full h-full">{ctaLabel}</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
