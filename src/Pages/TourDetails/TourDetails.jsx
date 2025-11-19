import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faCalendarAlt,
  faCalendarDays,
  faClock,
  faCloudSun,
  faDollarSign,
  faHandshake,
  faHourglassHalf,
  faList,
  faMap,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import { useLocation, useNavigate } from "react-router-dom";
import ReservationForm from "../../Components/ReservationForm/ReservationForm";
import { useEffect } from "react";

export default function TourDetails() {
  const {
    state: { trip },
  } = useLocation();
  const navigate = useNavigate();

  const TourData = [
    {
      icon: faMap,
      title: "Place",
      value: trip.place,
    },

    {
      icon: faHourglassHalf,
      title: "difficulty",
      value: trip.difficulty,
    },
    {
      icon: faList,
      title: "category",
      value: trip.category,
    },
    { icon: faHandshake, title: "meeting Place", value: trip.meetingPlace },
    { icon: faDollarSign, title: "price", value: trip.price },
  ];

  const TimingData = [
    { icon: faCalendarAlt, title: "Start Date", value: trip.startDate },
    { icon: faCalendarAlt, title: "return Time", value: trip.returnTime },
    { icon: faClock, title: "duration", value: trip.duration + "H" },
    { icon: faStar, title: "nights", value: trip.nights + " Nights" },
    { icon: faCloudSun, title: "Days", value: trip.days + " Days" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 mb-6"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "var(--background-color)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--icon)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--primary-color)";
        }}
        onClick={() => navigate("/")}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back To Home
      </button>

      <div className="mb-6">
        <h1 className="text-4xl font-extrabold mb-2 text-[var(--primary-color)]">
          {trip.title}
        </h1>
        <Rating
          name="half-rating-read"
          defaultValue={trip.rating}
          precision={0.5}
          readOnly
        />
      </div>

      <div className="flex justify-center mb-8">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full max-w-6xl h-[60vh] object-cover rounded-lg shadow-md"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">
          About the Tour
        </h2>
        <p className="text-lg text-gray-700">{trip.description}</p>
      </div>

      <div className="text-5xl text-[var(--primary-color)] font-serif mt-20 mb-6 flex justify-center">
        <h2 className="">Tour Details</h2>
      </div>

      <div
        className="mt-8 p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
        style={{ backgroundColor: "var(--background-color)" }}
      >
        {TourData.map((data, index) => (
          <div key={index} className="flex flex-col items-center gap-3 ">
            <FontAwesomeIcon
              icon={data.icon}
              className="text-[var(--icon)] text-6xl"
            />
            <h2 className="text-[var(--primary-color)] text-xl font-serif uppercase">
              {data.title}
            </h2>
            <p className="text-gray-700 font-medium">{data.value}</p>
          </div>
        ))}
      </div>
      <div className="text-5xl text-[var(--primary-color)] font-serif mt-20 mb-6 flex justify-center">
        <h2 className="">Dates & Times</h2>
      </div>
      <div
        className="mt-8 p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
        style={{ backgroundColor: "var(--background-color)" }}
      >
        {TimingData.map((data, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <FontAwesomeIcon
              icon={data.icon}
              className="text-[var(--icon)] text-6xl"
            />
            <h2 className="text-[var(--primary-color)] text-xl font-serif uppercase">
              {data.title}
            </h2>
            <p className="text-gray-700 font-medium">{data.value}</p>
          </div>
        ))}
      </div>
      <ReservationForm />
    </div>
  );
}
