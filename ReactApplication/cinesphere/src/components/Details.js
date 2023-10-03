import { getDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { db } from "../firebase/firebase";
import { Bars } from "react-loader-spinner";
import Review from "./Review";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
    rated: 0,
    director: "",
    genre: [],
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);

    }
    getData();
  }, []);

  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center ">
          <Bars height={25} color="white" />
        </div>
      ) : (
        <>
          <img
            src={data.image}
            alt={data.title}
            className="h-96 block md:sticky top-24"
          />
          <div className="md:ml-4 ml:0 w-full md:w-1/2">
            <h1 className="text-3xl  font-bold text-gray-50">
              {data.title}
              <span className="text-2xl"> ({data.year})</span>
            </h1>

            {/* Display Director */}
            <p className="text-gray-300">Director: {data.director}</p>

            {/* Display Genre */}
            <p className="text-gray-300">Genre: {data.genre.join(", ")}</p>
            <ReactStars size={30} half={true} value={data.rating / data.rated} edit={false} />

            <p className="mt-2">{data.description}</p>

            <Review id={id} prevRating={data.rating} userRated={data.rated} />
          </div>
        </>
      )}
    </div>
  );
};

export default Details;

