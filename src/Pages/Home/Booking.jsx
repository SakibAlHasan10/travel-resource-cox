
const Booking = () => {
    return (
        <div className="  ml-8 mr-16">
            <form className="card-body w-96 bg-white mx-auto rounded-lg">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Origen</span>
                </label>
                <input
                  type="text"
                  placeholder="Origen"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Destination</span>
                </label>
                <input
                  type="text"
                  placeholder="Destination"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* booking */}
              <div className="flex justify-between">
              <div className="form-control w-36">
                <label className="label">
                  <span className="label-text">Form</span>
                </label>
                <input
                  type="date"
                //   width={}
                  placeholder="Origen"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-36">
                <label className="label">
                  <span className="label-text">To</span>
                </label>
                <input
                  type="date"
                  placeholder="Destination"
                  className="input input-bordered"
                  required
                />
              </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-yellow-500">Start Booking</button>
              </div>
            </form>
        </div>
    );
};

export default Booking;