import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      className="w-full pt-10 pb-6"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img
            src="/assets/logo.png"
            alt="Traveler Logo"
            className="h-14 mb-3"
          />
          <p className="text-[var(--secondary-color)] leading-6">
            Discover the world with our unique tours, adventures, and travel
            packages. Your journey starts with us!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-[var(--secondary-color)]">
            {["Home", "Tours", "Blog", "Contact", "About Us"].map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-[var(--icon)] transition duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4 text-[var(--secondary-color)] text-2xl">
            <FontAwesomeIcon
              icon={faFacebook}
              className="cursor-pointer hover:text-[var(--icon)] transition duration-300"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="cursor-pointer hover:text-[var(--icon)] transition duration-300"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="cursor-pointer hover:text-[var(--icon)] transition duration-300"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="cursor-pointer hover:text-[var(--icon)] transition duration-300"
            />
          </div>
        </div>
      </div>

      <div
        className="text-center mt-10 pt-4 border-t"
        style={{ borderColor: "var(--secondary-color)" }}
      >
        <p className="text-[var(--secondary-color)]">
          © {new Date().getFullYear()} Travello. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
