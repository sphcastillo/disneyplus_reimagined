import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { HeroCarouselData } from "@/data/HeroCarouselData";
import Image from "next/image";

function HeroCarousel() {
  return (
    <div className="relative pt-6">
      <Carousel
        opts={{ align: "center", loop: true, containScroll: "trimSnaps" }}
      >
        <CarouselContent
          className="
            ml-0 [&>*]:pl-0
            px-2
            [&>*]:mx-2
            [&>*]:basis-[87%]  /* main slide always ~90% of screen width */
          "
        >
          {HeroCarouselData.map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="xs:h-[220px] lg:h-[470px] w-full overflow-hidden rounded-xl">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  width={1920}
                  height={810}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* arrows stay in the peek area */}
        <CarouselPrevious className="left-6 top-1/2 -translate-y-1/2 h-10 w-10" />
        <CarouselNext className="right-6 top-1/2 -translate-y-1/2 h-10 w-10" />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
