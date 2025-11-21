import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { corsouleData } from "../lib/data2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto text-white">
      {/* Slider Viewport */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {corsouleData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="min-w-full flex flex-col items-center justify-center p-6 bg-[#1a1a1a] rounded-xl shadow-lg"
              >
                <Icon className="text-5xl mb-3 text-blue-500" />
                <h1 className="text-2xl font-semibold mb-1">{item.title}</h1>
                <p className="text-gray-300 text-center">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-6 mt-4">
        <button onClick={scrollPrev} className="p-3 bg-gray-700 rounded-full">
          <FaChevronLeft />
        </button>
        <button onClick={scrollNext} className="p-3 bg-gray-700 rounded-full">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
