import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Couldn't sign in with google");
    }
  };
  return (
    <button
      type="Button"
      onClick={handleGoogleClick}
      className="uppercase bg-red-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
    >
      Continue with Google
    </button>
  );
}
