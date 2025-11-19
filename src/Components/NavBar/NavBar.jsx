export default function Navbar() {
  return (
    <nav
      className="w-full shadow-sm"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src="/assets/logo.png" alt="Traveler Logo" className="h-12" />

        <ul className="hidden md:flex items-center gap-8 font-semibold text-[var(--primary-color)]">
          {["Home", "Tours", "Blog", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-colors duration-300 hover:text-[var(--icon)]"
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          className="px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
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
        >
          Login
        </button>
      </div>
    </nav>
  );
}
