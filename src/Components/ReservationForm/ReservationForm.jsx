import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ReservationForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      guests: 1,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      date: Yup.date().required("Date is required").nullable(),
      guests: Yup.number()
        .min(1, "At least 1 guest")
        .required("Number of guests is required"),
    }),
    onSubmit: (values) => {
      alert(
        `Reservation made for ${values.name} on ${values.date} for ${values.guests} guests.`
      );
    },
  });

  return (
    <div className="mt-20">
      <h2 className="text-5xl text-[var(--primary-color)] font-serif mb-6 text-center">
        Reserve Your Spot
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="p-6 rounded-lg shadow-md grid grid-cols-1 gap-6"
        style={{ backgroundColor: "var(--background-color)" }}
      >
        {/* Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-[var(--primary-color)] text-xl font-serif mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`px-4 py-3 rounded border ${
              formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[var(--primary-color)] text-xl font-serif mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`px-4 py-3 rounded border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label
            htmlFor="date"
            className="text-[var(--primary-color)] text-xl font-serif mb-1"
          >
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className={`px-4 py-3 rounded border ${
              formik.touched.date && formik.errors.date
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.date && formik.errors.date && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.date}</p>
          )}
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label
            htmlFor="guests"
            className="text-[var(--primary-color)] text-xl font-serif mb-1"
          >
            Number of Guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.guests}
            className={`px-4 py-3 rounded border ${
              formik.touched.guests && formik.errors.guests
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.guests && formik.errors.guests && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.guests}</p>
          )}
        </div>

        {/* button */}
        <button
          type="submit"
          className="w-full py-3 rounded font-semibold transition text-white"
          style={{
            background: "var(--primary-color)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--icon)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--primary-color)")
          }
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
}
