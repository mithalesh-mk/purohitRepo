'use client';

import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="py-12 px-6 bg-[var(--background2)] ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left: Form */}
        <div className="space-y-4">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Location"
              className="p-2 border border-gray-300 rounded"
            />
            <select
              className="p-2 border border-gray-300 rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Type of Puja
              </option>
              <option value="satyanarayan">Satyanarayan Puja</option>
              <option value="rudrabhishek">Rudrabhishek</option>
              <option value="grihapravesh">Griha Pravesh</option>
              <option value="navgrah">Navgrah Puja</option>
            </select>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </div>

        {/* Middle: Text */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl font-bold">Book Your Puja Easily</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Find trusted pandits for your next spiritual ceremony with just a few clicks.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src="/hero-image.png" // 🔁 Replace with actual image path in `public/`
            alt="Puja Celebration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
