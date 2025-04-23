import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Contact({ listing }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [landLord, setLandlord] = useState(null);
  const params = useParams;
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        console.log(data);
        if (data.success === false) {
          setLoading(false);
          setError(true);
          return;
        }
        setLandlord(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchUser();
  }, [listing.userRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {" "}
      {landLord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact
            <span className="font-semibold"> {landLord.username}</span> for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            id="message"
            value={message}
            className="w-full rounded-lg p-3 bg-white"
            placeholder="Enter your message here..."
            rows="2"
            onChange={onChange}
          />
          <Link
            to={`mailto:${landLord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="p-3 bg-slate-700 text-white rounded-lg uppercase text-center hover:opacity-95 disabled:opacity-80"
          >
            Send message
          </Link>
        </div>
      )}
    </>
  );
}
