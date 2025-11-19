import Background from "../../../public/assets/Background2.jpg";
import Trips from "../../Components/Trips/Trips";

export default function Home() {
  return (
    <>
      <div
        className="relative flex justify-center items-center w-full h-[80vh] bg-gray-200 bg-center bg-cover"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 font-serif">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Discover Your Next Adventure
          </h1>

          <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-xl">
            Explore breathtaking destinations and create unforgettable memories
          </p>
        </div>
      </div>

      <Trips />
    </>
  );
}
