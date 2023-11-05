const Enquiry = () => {
  return (
    <div className="mt-20 min-h-screen max-w-7xl mx-auto bg-yellow-50 p-14">
      <div className="text-center">
        <div className="">
          <h1 className="text-5xl font-bold">
            Make An <span className="text-orange-400">Enquiry</span>
          </h1>
          <p className="py-6">
            Send us a message and we’ll get back to you shortly.
          </p>
        </div>
        <form>
          <div className="lg:flex gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="py-3 px-4 w-full lg:my-4 outline-none focus:outline-none"
            />
            <input
              type="number"
              placeholder="Your Mobile"
              className="py-3 px-4 w-full my-4 outline-none focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="py-3 px-4 w-full outline-none focus:outline-none"
          />
          <textarea
            name="comments"
            placeholder="Message"
            className="w-full my-4 h-72 px-4 py-2 outline-none focus:outline-none"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
