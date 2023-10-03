import { getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { movieRef } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      const _data = await getDocs(movieRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev, { ...doc.data(), id: doc.id }]);
      });

      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between px-3 mt-0.5">
      {loading ? (
        <div className="w-full flex justify-center items-center h-96">
          <ThreeDots height={40} color="white" />{" "}
        </div>
      ) : (
        data.map((e, i) => {
          return (
            <Link to={`/details/${e.id}`} key={i}>
              <div className="mt-1">
                <div className="card font-medium p-2 cursor-pointer h-96 w-44 hover:-translate-y-3 text-bold mt-6 transition-all duration-500">
                  <img
                    className="h-60 md:h-64 w-52 md:w-60"
                    src={e.image}
                    alt={e.title}
                  />
                  <div className="pt-2">
                    <h1 className="line-clamp-3 md:line-clamp-2">
                      <span className="text-gray-400">Name:</span> { e.title}
                    </h1>
                    <h1 className="flex items-center">
                      <span className="text-gray-400">Rating: </span>
                      
                      <ReactStars
                        color1="white"
                        size={20}
                        half={true}
                        value= { e.rating / e.rated}
                        edit={false}
                      />
                    </h1>
                    <h1>
                      <span className="text-gray-400">Year:</span> { e.year}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Cards;
