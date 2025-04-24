import React from "react";

export default function Search() {
  return (
    <div className="flex gap-10  flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen border-gray-300">
        <form className="flex flex-col gap-10 flex-wrap">
          <div className="flex gap-4 items-center">
            <label className="whitespace-nowrap font-semibold">
              Search Term
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="rounded-lg p-3 bg-white w-full "
            />
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="all" className="w-5" />
              <span>Sell & Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sell" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <label className="font-semibold">Sort:</label>
            <select id="sort_order" className="rounded-lg p-3 bg-white">
              <option>Price low to high</option>
              <option>Price high to low</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="rounded-lg text-white bg-slate-700 p-3 uppercase hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold mt-5 text-slate-700 border-b  border-gray-300">
          Listing results
        </h1>
      </div>
    </div>
  );
}
