import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import Contact from "../components/Contact";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [listing, setListing] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showMessageArea, setShowMessageArear] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setLoading(false);
          setError(true);
          return;
        }
        setListing(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchListing();
  }, [params.listingId]);
  return (
    <main>
      {loading && <p className="text-center my-10 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-10 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[13%] right-[3%]  z-10 border border-slate-50 rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
              className="text-slate-500"
            />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied
            </p>
          )}
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <p className="text-2xl font-semibold">
              {listing.name} -${" "}
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type == "rent" && " / month"}
            </p>
            <p className="flex items-center mt-6 gap-2 text-slate-600 text-sm">
              <FaMapMarkedAlt className="text-green-700" />
              {listing.address}
            </p>
            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </p>
              {listing.offer && (
                <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  ${+listing.regularPrice - +listing.discountPrice} OFF
                </p>
              )}
            </div>
            <p className="text-slate-800">
              <span className=" font-semibold text-black">Description -</span>{" "}
              {listing.description}
            </p>
            <ul className=" text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
              <li className="flex gap-1 items-center whitespace-nowrap">
                <FaBed className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds`
                  : `${listing.bedrooms} bed`}
              </li>
              <li className="flex gap-1 items-center whitespace-nowrap">
                <FaBath className="text-lg" />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths`
                  : `${listing.bathrooms} bath`}
              </li>
              <li className="flex gap-1 items-center whitespace-nowrap">
                <FaParking className="text-lg" />
                {listing.parking ? "Parking spot" : "No Parking"}
              </li>
              <li className="flex gap-1 items-center whitespace-nowrap">
                <FaChair className="text-lg" />
                {listing.furnished ? "Furnished" : "Unfurnished"}
              </li>
            </ul>
            {currentUser &&
              listing.userRef !== currentUser._id &&
              !showMessageArea && (
                <button
                  onClick={() => {
                    setShowMessageArear(true);
                  }}
                  className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                  Contact landlord
                </button>
              )}

            {showMessageArea && (
              <div className="">
                <Contact listing={listing} />
                {/* <p className="font-semibold">
                  Contact {currentUser.username}
                  <span> for {listing.name}</span>
                </p> */}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
