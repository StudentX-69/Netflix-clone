import React, { useRef } from "react";
import Cards from "./Cards";
import FaQ from "./FaQ"
import { ChevronLeft, ChevronRight } from "lucide-react";

const Content = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const poster = [
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJ27Dyyj3kXoEBHl10PG_yN9_d1qfXFu1DvWnoV21_WJVOg8XAinBlTl1XiHOKSGXUX75Rg&s=10' },
    {img: 'https://preview.redd.it/my-honest-thoughts-on-teach-you-a-lesson-v0-0fv8mf17dd7h1.jpeg?width=640&crop=smart&auto=webp&s=cb92ac759f328584da22875cc38a4c893f067981'},
    {img: 'https://cdn.kinocheck.com/i/f4m494uuxo.jpg'},
    {img: 'https://images.justwatch.com/poster/346578932/s332/season-2.avif'},
    {img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kara-et00482723-1768985880.jpg'},
    {img: 'https://cdn.district.in/movies-assets/images/cinema/DD-3843b150-1d22-11f1-b9d6-4d8fc8f0221a.jpg'},
    {img : 'https://cdn.district.in/movies-assets/images/cinema/_HorizontalDhurandhar-1b8dc980-ce83-11f0-af8c-6926695421f1.jpg?im=Resize,width=720'}

  ]
  return (
    <section className="relative z-20 h-full w-full max-w-full overflow-x-clip bg-black pb-24">
      {/* Curve Separator */}
      <div className="relative h-20 sm:h-40 w-full max-w-full overflow-hidden">
        <div 
          id="curve" 
          className="absolute left-1/2 top-0 h-40 w-[calc(100%+80px)] max-w-none -translate-x-1/2 rounded-t-[100%] border-t-4 border-red-600 bg-black sm:w-[calc(100%+160px)] shadow-[0_-10px_30px_rgba(220,38,38,0.2)]" 
        />
      </div>

      {/* Trending Section */}
      <div id="trending" className="relative z-10 mx-auto w-full max-w-6xl px-6 -mt-4 sm:-mt-10">
        <h2 className=" text-xs font-semibold text-white md:text-2xl mb-6">Trending Now</h2>
        <div className="absolute left-1/2 -top-20 h-20 w-[min(500px,100vw)] -translate-x-1/2 bg-blue-600/50 blur-[80px] pointer-events-none overflow-hidden" />
        
        <div className="relative max-w-min md:max-w-[95%]  gap-2 flex items-center">
          
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-1 z-10 h-30 w-7 bg-[#525252e8] hover:bg-[#6c6c6c] text-white p-2 rounded-2xl transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
          
          
          <div ref={scrollContainerRef} className="flex gap-4 pb-8 snap-x overflow-x-hidden">
            {poster.map((item) => (
              <div key={item.img} className="h-70 w-45 mx-2   sm:min-w-[200px] rounded-md bg-zinc-800 shrink-0 snap-center hover:scale-105 transition-transform cursor-pointer border flex items-center justify-center overflow-hidden ">
                 <img src={item.img} alt="Trending" className="w-full h-full object-cover " />
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 h-30 w-7 bg-[#525252e8] hover:bg-[#6c6c6c] text-white p-2 rounded-full transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        </div>
        <h2 className="text-xs font-semibold text-white md:text-2xl py-5 ">More reasons to join</h2>
        <Cards />
        <FaQ />
      </div>
      
    </section>
  );
};

export default Content;
