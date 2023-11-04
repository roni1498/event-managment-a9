import PropTypes from "prop-types";

const Service = ({ service }) => {
  const { photo, title, shortDescription } = service;
  return (
    <div className="flex flex-col justify-center mx-auto ">
      <div className="group h-96 w-96 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500      [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={photo}
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-lg">{shortDescription}</p>
              <button className="mt-2 rounded-md bg-neutral-800 py-2 px-2 text-base hover:bg-neutral-900">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object.isRequired,
};
export default Service;
