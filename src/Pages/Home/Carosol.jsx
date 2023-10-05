const Carosol = () => {
  return (
    <div>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item ml-6  rounded-2xl">
          <img
            src="/images/Rectangle 1.png"
            alt="Drink"
            className="w-56 rounded-2xl hover:border-4 border-yellow-500 "
          />
          <h2 className="absolute text-3xl font-bold uppercase bottom-4 mx-3 text-white">Cox`s bazar</h2>
        </div>
        <div className="carousel-item ml-6">
          <img
            src="/images/Sreemongol.png"
            alt="Drink"
            className="w-56 hover:border-4 border-yellow-500 rounded-2xl"
          />
        </div>
        <div className="carousel-item ml-6 ">
          <img
            src="/images/sundorbon.png"
            alt="Drink"
            className="w-56 hover:border-4 rounded-2xl border-yellow-500"
          />
        </div>
        {/* <div className="carousel-item ml-6 ">
          <img
            src="/images/Sajek.png hover:border-4 rounded-2xl border-yellow-500"
            alt="Drink"
            className="w-56 "
          />
        </div> */}
        
      </div>
    </div>
  );
};

export default Carosol;
