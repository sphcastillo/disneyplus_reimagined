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
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-slate-900/20 to-transparent z-10"
        aria-hidden
      />
      <Carousel
        className="group"
        opts={{ align: "center", loop: true, containScroll: "trimSnaps" }}
      >
        <CarouselContent
          className="
            ml-0 [&>*]:pl-0
            px-2
            [&>*]:mx-2
            [&>*]:basis-[92%]
            sm:[&>*]:basis-[94%]
            md:[&>*]:basis-[96%]
            lg:[&>*]:basis-[92%]
          "
        >
          {HeroCarouselData.map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="group/slide relative h-[200px] sm:h-[325px] md:h-[350px] lg:h-[400px] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_0_30px_rgba(0,0,0,0.4),0_0_60px_rgba(88,28,135,0.15)] transition-all duration-300 hover:ring-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.35),0_0_80px_rgba(168,85,247,0.2)] hover:scale-[1.01]">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  width={1920}
                  height={810}
                  priority
                  className="h-full w-full object-cover object-right sm:object-right md:object-right lg:object-right transition-transform duration-500 group-hover/slide:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent via-40% to-transparent pointer-events-none"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(0,0,0,0.4),transparent_60%)] pointer-events-none"
                  aria-hidden
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="
            hidden sm:flex left-6 top-1/2 -translate-y-1/2
            h-11 w-11 lg:h-12 lg:w-12 rounded-full
            items-center justify-center
            bg-white/10 backdrop-blur-md border border-white/20
            text-white
            opacity-0 pointer-events-none
            transition-all duration-200
            group-hover:opacity-100 group-hover:pointer-events-auto
            hover:bg-white/20 hover:scale-110 hover:border-white/30
            focus-visible:opacity-100 focus-visible:pointer-events-auto
            shadow-lg shadow-black/30
          "
        />
        <CarouselNext
          className="
            hidden sm:flex right-6 top-1/2 -translate-y-1/2
            h-11 w-11 lg:h-12 lg:w-12 rounded-full
            items-center justify-center
            bg-white/10 backdrop-blur-md border border-white/20
            text-white
            opacity-0 pointer-events-none
            transition-all duration-200
            group-hover:opacity-100 group-hover:pointer-events-auto
            hover:bg-white/20 hover:scale-110 hover:border-white/30
            focus-visible:opacity-100 focus-visible:pointer-events-auto
            shadow-lg shadow-black/30
          "
        />
      </Carousel>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#17171B]/80 to-transparent -z-10"
        aria-hidden
      />
    </div>
  );
}

export default HeroCarousel;
