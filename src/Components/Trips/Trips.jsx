import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlarmClock,
  faLocation,
  faLocationDot,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
import TripSearch from "../TripSearch/TripSearch";
import { use, useState } from "react";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import { useNavigate } from "react-router-dom";
import PriceFilter from "../PriceFilter/PriceFilter";

export default function Trips() {
  const trips = [
    {
      id: 1,
      title: "Trip to Paris",
      description:
        "Enjoy a magical tour of the City of Light, visiting famous landmarks like the Eiffel Tower, the Louvre Museum, and charming neighborhoods such as Montmartre. Experience world-class cuisine, river cruises on the Seine, and vibrant cultural events in the heart of France's capital.",
      price: 1500,
      image:
        "https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg",
      place: "Paris, France",
      days: 5,
      nights: 4,
      duration: 9,
      rating: 4,
      reviewsCount: 124,
      difficulty: "Easy",
      category: "Cultural",
      meetingPlace: "Charles de Gaulle Airport, Paris",
      returnTime: "18:00",
      startDate: "2025-06-10",
    },
    {
      id: 2,
      title: "Adventure in Cape Town",
      description:
        "Discover the natural beauty of Cape Town with mountain hikes up Table Mountain, stunning beaches like Camps Bay, and unique cultural experiences such as township tours. Enjoy thrilling activities like shark cage diving and wine tasting in nearby vineyards.",
      price: 1300,
      image:
        "https://images.pexels.com/photos/1045113/pexels-photo-1045113.jpeg",
      place: "Cape Town, South Africa",
      days: 7,
      nights: 6,
      duration: 13,
      rating: 3.3,
      reviewsCount: 98,
      difficulty: "Medium",
      category: "Adventure",
      meetingPlace: "Cape Town International Airport",
      returnTime: "20:00",
      startDate: "2025-07-05",
    },
    {
      id: 3,
      title: "Explore Tokyo",
      description:
        "Dive into the bustling city life and rich traditions of Tokyo, with visits to vibrant markets, ancient temples like Senso-ji, and modern attractions such as Tokyo Skytree. Experience delicious sushi, pop culture, and beautiful parks during cherry blossom season.",
      price: 1800,
      image: "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg",
      place: "Tokyo, Japan",
      days: 6,
      nights: 5,
      duration: 11,
      rating: 5,
      reviewsCount: 112,
      difficulty: "Medium",
      category: "City Tour",
      meetingPlace: "Narita International Airport",
      returnTime: "19:30",
      startDate: "2025-08-12",
    },
    {
      id: 4,
      title: "Cultural Trip to Cairo",
      description:
        "Learn about ancient Egyptian civilization by visiting the iconic pyramids of Giza, the Egyptian Museum, and bustling local bazaars. Experience the vibrant culture and history that shaped one of the world's oldest civilizations with expert guides.",
      price: 900,
      image: "https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg",
      place: "Cairo, Egypt",
      days: 4,
      nights: 3,
      duration: 7,
      rating: 4.3,
      reviewsCount: 85,
      difficulty: "Easy",
      category: "Historical",
      meetingPlace: "Cairo International Airport",
      returnTime: "17:00",
      startDate: "2025-05-20",
    },
    {
      id: 5,
      title: "Safari in Kenya",
      description:
        "Experience African safari adventures and see wild animals such as lions, elephants, and giraffes in their natural habitats within Kenya's famous reserves like Maasai Mara. Enjoy luxury camps, guided tours, and breathtaking landscapes.",
      price: 2200,
      image:
        "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg",
      place: "Kenya, Africa",
      days: 8,
      nights: 7,
      duration: 15,
      rating: 4.9,
      reviewsCount: 150,
      difficulty: "Hard",
      category: "Wildlife",
      meetingPlace: "Jomo Kenyatta International Airport",
      returnTime: "21:00",
      startDate: "2025-09-15",
    },
    {
      id: 6,
      title: "Relax in the Maldives",
      description:
        "Enjoy white sandy beaches and turquoise waters in the Maldives with stays at luxury resorts offering overwater bungalows, snorkeling, spa treatments, and exquisite dining experiences in paradise.",
      price: 2500,
      image:
        "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
      place: "Maldives",
      days: 5,
      nights: 4,
      duration: 9,
      rating: 4.6,
      reviewsCount: 140,
      difficulty: "Easy",
      category: "Relaxation",
      meetingPlace: "Velana International Airport",
      returnTime: "16:00",
      startDate: "2025-10-01",
    },
    {
      id: 7,
      title: "Hiking in the Swiss Alps",
      description:
        "Explore breathtaking mountain trails and scenic landscapes in the Swiss Alps. Ideal for nature lovers and adventure seekers, with cozy alpine lodges and fresh mountain air.",
      price: 2000,
      image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      place: "Swiss Alps, Switzerland",
      days: 6,
      nights: 5,
      duration: 11,
      rating: 4.8,
      reviewsCount: 97,
      difficulty: "Medium",
      category: "Adventure",
      meetingPlace: "Zurich Airport",
      returnTime: "18:30",
      startDate: "2025-11-10",
    },
    {
      id: 8,
      title: "Beach Vacation in Bali",
      description:
        "Relax on pristine beaches, explore coral reefs, and enjoy vibrant nightlife in Bali. Perfect for a tropical getaway with a mix of relaxation and adventure.",
      price: 1700,
      image:
        "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg",
      place: "Bali, Indonesia",
      days: 7,
      nights: 6,
      duration: 13,
      rating: 4.5,
      reviewsCount: 130,
      difficulty: "Easy",
      category: "Relaxation",
      meetingPlace: "Ngurah Rai International Airport",
      returnTime: "17:00",
      startDate: "2025-12-05",
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  const [maxPrice, setMaxPrice] = useState("");

  const filteredTrips = trips.filter((trip) => {
    const matchesSearch =
      trip.place.toLowerCase().includes(search.toLowerCase()) ||
      trip.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || trip.category === category;

    const matchesPrice = maxPrice === "" || trip.price <= Number(maxPrice);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
      <div className="m-10">
        <h1 className="text-5xl font-bold text-[var(--primary-color)] mb-6 text-center">
          Explore Our Trips
        </h1>
        <p className="text-xl text-center">
          Discover our carefully curated selection of tours
        </p>
      </div>

      <div className="flex justify-between items-center">
        <TripSearch setSearch={setSearch} />

        <PriceFilter maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
      </div>

      <CategoryFilter category={category} setCategory={setCategory} />

      <div className="flex flex-start mb-6 ml-10"></div>

      {filteredTrips.length === 0 && (
        <p className="text-2xl font-bold text-red-500 m-10 text-center">
          No trips found. Try another search.
        </p>
      )}

      <div className="flex flex-wrap justify-center ">
        {filteredTrips.map((trip) => {
          return (
            <div
              key={trip.id}
              className="w-80 m-4  rounded-lg overflow-hidden shadow-lg bg-[var(--background-color)] hover:scale-105 transition-transform duration-300 "
            >
              <div>
                <img src={trip.image} alt="" className="h-[30vh] w-full " />
              </div>
              <div>
                <div className="px-6 py-4">
                  <h2 className="font-bold text-xl mb-2 text-[var(--primary-color)]">
                    {trip.title}
                  </h2>
                  <Rating
                    name="half-rating-read"
                    defaultValue={trip.rating}
                    precision={0.5}
                    readOnly
                  />
                  <p className="text-gray-700 text-base text-[var(--secondary-color)]">
                    {trip.description.split(" ").slice(0, 20).join(" ")}
                    {trip.description.length > 25 ? "..." : ""}
                  </p>
                  <div>
                    <p className="mt-4  font-bold text-sm  text-[var(--icon)] flex items-center gap-2">
                      <FontAwesomeIcon icon={faLocationDot} /> Location:{" "}
                      {trip.place}
                    </p>
                  </div>
                  <div className=" flex gap-10">
                    <p className="mt-4   text-[var(--icon)] flex items-center gap-2">
                      <FontAwesomeIcon icon={faTag} />
                      Price:
                      {trip.price}
                    </p>
                    <p className="mt-4    text-[var(--icon)] flex items-center gap-2">
                      <FontAwesomeIcon icon={faAlarmClock} /> Duration:
                      {trip.duration}H
                    </p>
                  </div>
                  <button
                    className="my-7 w-full py-2 px-4 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0ea5e9] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0a3d62] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer
  "
                    onClick={() =>
                      navigate(`/tour/${trip.id}`, { state: { trip } })
                    }
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
