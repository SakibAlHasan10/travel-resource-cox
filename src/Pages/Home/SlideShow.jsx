const SlideShow = () => {
  // const hero = <>
  //   <div className="carousel w-full h-[100vh] ">
  //       <div id="slide1" className="carousel-item relative w-full">
  //         <img src="/images/Rectangle 1.png" className="w-full" />
  //         <div className="absolute flex gap-5 bottom-10 left-1/2 transform -translate-y-1/2 ">
  //           <a href="#slide4" className="btn btn-circle">
  //             ❮
  //           </a>
  //           <a href="#slide2" className="btn btn-circle">
  //             ❯
  //           </a>
  //         </div>
  //       </div>
  //       <div id="slide2" className="carousel-item relative w-full">
  //         <img src="/images/Rectangle 26.png" className="w-full" />
  //         <div className="absolute flex  transform -translate-y-1/2 gap-5 bottom-10 left-1/2">
  //           <a href="#slide1" className="btn btn-circle">
  //             ❮
  //           </a>
  //           <a href="#slide3" className="btn btn-circle">
  //             ❯
  //           </a>
  //         </div>
  //       </div>
  //       <div id="slide3" className="carousel-item relative w-full">
  //         <img src="/images/Rectangle 27.png" className="w-full" />
  //         <div className="absolute flex  transform -translate-y-1/2 gap-5 bottom-10 left-1/2">
  //           <a href="#slide2" className="btn btn-circle">
  //             ❮
  //           </a>
  //           <a href="#slide4" className="btn btn-circle">
  //             ❯
  //           </a>
  //         </div>
  //       </div>
  //       <div id="slide4" className="carousel-item relative w-full">
  //         <img src="/images/Rectangle 28.png" className="w-full" />
  //         <div className="absolute flex  transform -translate-y-1/2 gap-5 bottom-10 left-1/2">
  //           <a href="#slide3" className="btn btn-circle">
  //             ❮
  //           </a>
  //           <a href="#slide1" className="btn btn-circle">
  //             ❯
  //           </a>
  //         </div>
  //       </div>
  //       <div><SlideShow></SlideShow></div>
  //     </div>
  // </>
  return (
    <div>
      <div className="flex gap-6 max-w-screen-xl mx-auto px-8">
        <div className="text-white flex-1 ">
          <h2 className="uppercase text-7xl font-extrabold mb-4">
            Cox`s bazar
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            totam. Ut, ad cupiditate sequi ab maiores delectus illum voluptas
            nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorum, totam. Ut, ad cupiditate sequi ab maiores delectus illum
            voluptas nam!
          </p>
          <button className="btn btn-sm mt-6 bg-yellow-500">Booking</button>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
