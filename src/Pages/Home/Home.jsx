import SlideShow from "./SlideShow";

const Home = () => {
  // const arr = ['#slide1', '#slide2', '#slide3', '#slide4']
  return (
    <div className="relative">
      <div className="carousel w-full h-[100vh] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images/Rectangle 1.png" className="w-full" />
          
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/Rectangle 26.png" className="w-full" />
          
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/Rectangle 27.png" className="w-full" />
          
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/images/Rectangle 28.png" className="w-full" />
          
        </div>
        <div className="absolute bg-[#0000007e] w-full h-full z-0">
        <div className=" flex absolute top-1/3">
          <div>
        <SlideShow></SlideShow>
          </div>
          <div>
        <SlideShow></SlideShow>
          </div>
      </div>
        <div className="absolute flex  transform -translate-y-1/2 gap-5 bottom-10 left-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
