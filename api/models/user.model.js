import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      // default:
      //   "https://lh3.googleusercontent.com/a/ACg8ocIFAbCUVodDEoxaz1kiz3ORcByn_S82ndh4Mwq601E5IOfr8pY=s96-c",
      default:
        "https://static.vecteezy.com/ti/vecteur-libre/p1/43361860-main-homme-dessine-avatar-profil-icone-pour-social-les-reseaux-forums-et-sortir-ensemble-des-sites-utilisateur-avatar-profil-espace-reserve-anonyme-utilisateur-homme-non-photo-la-toile-modele-defaut-utilisateur-image-profil-masculin-symbole-gratuit-vectoriel.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
