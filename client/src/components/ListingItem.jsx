import { list } from "firebase/storage";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[320px] sm:h-[180px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-slate-600 truncate">{listing.address}</p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 font-semibold mt-2">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" ? " / month" : ""}
          </p>
          <div className="flex gap-4 text-slate-600">
            <p className="font-bold text-xs">{listing.bedrooms} beds</p>{" "}
            <p className="font-bold text-xs">{listing.bathrooms} baths</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
