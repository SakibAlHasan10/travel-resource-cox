import useApi from "../../ContextApi/useApi";

const SlideShow = () => {
  const { handleBooking} = useApi()
  // console.log(booking)
  return (
    <div>
      <div className="flex gap-6 max-w-screen-xl mx-auto px-8">
        <div className="text-white flex-1 ">
          <h2 className="uppercase text-3xl md:text-7xl font-extrabold mb-4">
            Cox`s bazar
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            totam. Ut, ad cupiditate sequi ab maiores delectus illum voluptas
            nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorum, totam. Ut, ad cupiditate sequi ab maiores delectus illum
            voluptas nam!
          </p>
          <button onClick={handleBooking} className="btn btn-sm mt-6 bg-yellow-500">Booking</button>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
